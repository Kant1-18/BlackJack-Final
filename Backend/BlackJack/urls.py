from ninja import NinjaAPI, ModelSchema, Schema
from .models import Game, Player
from BlackJack import services


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

class ChangeScoreSchema(Schema):
    player: Player
    score: int

@api.post("/start_game/")
def add(request, add_game_schema: AddGameSchema):
    return services.create_game(add_game_schema.name, add_game_schema.players)

@api.post("/change_score/")
def updateScore(request, change_score_schema: ChangeScoreSchema):
    return services.change_score(change_score_schema.player.id, change_score_schema.score)

@api.get("/get_score/")
def getScore(request, player_id: int):
    return services.get_score(player_id)

@api.get("/get_winner/")
def getWinner(request, game_id: int):
    return services.get_winner(game_id)

@api.get("/get_players/")
def getPlayers(request, game_id: int):
    return services.get_players(game_id)

@api.get("/get_game/")
def getGame(request, game_id: int):
    return services.get_game(game_id)
