from django.db import models
from .models import Game
from .models import Player

def create_game(name: str, players: list[str]):
    game = Game.objects.create(name=name)
    for player in players:
        Player.objects.create(name=player, game=game.id)

    return game

def get_players(game_id):
    game = Game.objects.get(pk=game_id)
    players = game.players.all()
    return players

def get_score(player_id):
    player = Player.objects.get(pk=player_id)
    return player.score

def change_score(player_id, score):
    player = Player.objects.get(pk=player_id)
    player.score = score
    return player

def get_winner(game_id):
    winner = []
    players = get_players(game_id)

    best_score = 0
    for player in players:
        if player.score > 21:
            continue
        else:
            if player.score < best_score:
                continue
            else:
                if len(winner) == 0:
                    winner.append(player)
                else:
                    for player2 in winner:
                        if player2.score < player.score:
                            winner.remove(player2)
                    winner.append(player)
    return winner
