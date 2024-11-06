from django.db import models
from .models import Game
from .models import Player
import random

def create_game(name: str, players: list[str]):
    game = Game.objects.create(name=name)
    for player in players:
        Player.objects.create(name=player, game=game)

    return game

def get_game(game_id):
    game = Game.objects.get(pk=game_id)
    return game

def get_players(game_id):
    returnList = []
    game = Game.objects.get(pk=game_id)
    players = game.players.all()
    return players

def get_player(player_id):
    player = Player.objects.get(pk=player_id)
    return player

def get_winner(game_id):
    winners = []
    players = get_players(game_id)

    best_score = 0
    print(players)
    for player in players:
        if player.score > 21:
            continue
        else:
            if player.score >= best_score:
                winners.append(player)
                best_score = player.score

    for player in reversed(winners):
        if player.score < best_score:
            winners.remove(player)

    return winners

def addTurn(game_id):
    game = Game.objects.get(pk=game_id)
    game.turn += 1
    game.save()
    return game.turn

def getTurn(game_id):
    game = Game.objects.get(pk=game_id)
    return game.turn

def endGame(game_id):
    game = Game.objects.get(pk=game_id)
    game.ended = True
    game.save()
    return game.ended

def launchDice(player_id, numberOfDice):
    player = get_player(player_id)
    result = player.score

    for i in range(numberOfDice):
        result += random.randint(1, 6)

    player.score = result
    player.save()

    return player
