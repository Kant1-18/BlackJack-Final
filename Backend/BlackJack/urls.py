from ninja import NinjaAPI, ModelSchema, Schema
from .models import Game, Player
from BlackJack import services
import json


api = NinjaAPI()

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = ["id", "name", "turn", "ended"]
        
class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = ["id", "name", "score", "game"]

class AddGameSchema(Schema):
    name: str
    players: list[str]

@api.post("/start_game/")
def add(request, add_game_schema: AddGameSchema):
    game = services.create_game(add_game_schema.name, add_game_schema.players)
    players = services.get_players(game.id)
    
    listPlayers = []
    for player in players:
        listPlayers.append([player.id, player.name, player.score])
    return json.dumps(((game.id, game.name, game.turn, game.ended), listPlayers))

@api.get("/get_game/{game_id}/")
def get_game(request, game_id):
    game = services.get_game(game_id)
    return json.dumps((game.id, game.name, game.turn, game.ended))

@api.get("/get_players/{game_id}/")
def get_players(request, game_id):
    players = services.get_players(game_id)
    
    listPlayers = []
    for player in players:
        listPlayers.append([player.id, player.name, player.score])
    return json.dumps(listPlayers)

@api.get("/get_player/{player_id}/")
def get_player(request, player_id):
    player = services.get_players(player_id)
    return json.dumps((player.id, player.name, player.score))

@api.post("/change_score/{player_id}/{newScore}/")
def change_score(request, player_id, newScore):
    player = services.change_score(player_id, newScore)
    return json.dumps(player.score)
