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

@api.post("/start_game/")
def add(request, add_game_schema: AddGameSchema):
    return services.create_game(add_game_schema.name, add_game_schema.players)
