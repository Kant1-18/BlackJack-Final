from ninja import NinjaAPI, ModelSchema, Schema
from .models import Game, Player
from BlackJack import services
import json


api = NinjaAPI()
        
class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["id", "name", "score", "game"]

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = ["id", "name", "turn", "ended"]
        players: list[PlayerSchema]

class AddGameSchema(Schema):
    name: str
    players: list[str]

class LaunchDiceSchema(Schema):
    player_id: int
    number_of_dice: int

class EndTurnSchema(Schema):
    game_id: int

class getPlayersSchema(Schema):
    game_id: int

@api.post("/start_game/")
def add(request, add_game_schema: AddGameSchema):
    game = services.create_game(add_game_schema.name, add_game_schema.players)
    players = services.get_players(game.id)
    listPlayers = []
    for player in players:
        listPlayers.append([player.id, player.name, player.score])
    return json.dumps(((game.id, game.name, game.turn, game.ended), listPlayers))

@api.post("/launch_dice/")
def launch_dice(request, launch_dice_schema: LaunchDiceSchema):
    player = services.launchDice(launch_dice_schema.player_id, launch_dice_schema.number_of_dice)
    return json.dumps((player.score))

@api.post("/end_turn/")
def end_turn(request, end_turn_schema: EndTurnSchema):
    game = services.get_game(end_turn_schema.game_id)
    players = services.get_players(end_turn_schema.game_id)

    gameTurn = services.addTurn(end_turn_schema.game_id)

    if gameTurn == len(players):
        gameEnded = services.endGame(end_turn_schema.game_id)
        winners = services.get_winner(end_turn_schema.game_id)        

        for player in winners:
            listWinner = []
            listWinner.append([player.id, player.name, player.score])
        return json.dumps(listWinner)
    else:
        gameEnded = game.ended
        return json.dumps(gameEnded)


@api.get("/get_game/{game_id}/")
def get_game_info(request, game_id: int):
    game = services.get_game(game_id)
    players = services.get_players(game_id)
    
    listPlayers = []
    for player in players:
        listPlayers.append([player.id, player.name, player.score])

    game_info = {
        "game": {
            "id": game.id,
            "name": game.name,
            "turn": game.turn,
            "ended": game.ended
        },
        "players": listPlayers
    }
    return json.dumps(game_info)