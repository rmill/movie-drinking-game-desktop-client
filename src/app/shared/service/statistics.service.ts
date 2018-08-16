import { Injectable } from '@angular/core';

import { Player } from './game.service';
import { WebsocketService } from './websocket.service';

@Injectable()
export class StatisticsService {

  private players: any = {};

  public mostCorrectAnswers: any = {};
  public mostWrongAnswers: any = {};
  public mostMissedAnswers: any = {};
  public bestStreak: any = {};
  public mostDrinks: any = {};
  public bestAnswerSpeed: any = {};
  public currentWrongPlayers: Array<Player> = [];
  public currentDrinks = [];

  constructor (private websocket: WebsocketService) {
    websocket.on('new-player', (player: Player) => { this.newPlayer(player) })
  }

  getStats (playerToken) {
    return this.players[playerToken];
  }

  process (question, answers) {
    this.currentWrongPlayers = [];
    this.currentDrinks = [];

    for (let id in this.players) {
      let player = this.players[id];
      let answer = answers[id];

      this.updateAnswerCount(question, answer, player);
      this.updateStreak(question, answer, player);
      this.updateAnswerSpeed(answer, player);
    }

    this.updateDrinks(question, this.currentWrongPlayers);
  }

  updateAnswerCount (question, answer, player) {
    if (answer) {
      // Add the right and wrong answers
      if (question.correct_answers.indexOf(answer.answer) >= 0) {
        player.correctAnswers++;
      } else {
        player.wrongAnswers++;
        this.currentWrongPlayers.push(player);
      }
    } else {
      // Add the missed answers
      player.missedAnswers++;
      this.currentWrongPlayers.push(player);
    }
  }

  updateStreak (question, answer, player) {
    if (answer && question.correct_answers.indexOf(answer.answer) >= 0) {
      player.currentStreak++;

      if (player.currentStreak > player.bestStreak) {
        player.bestStreak = player.currentStreak;
      }
    } else {
      player.currentStreak = 0;
    }
  }

  updateAnswerSpeed (answer, player) {
    let numQuestions = player.correctAnswers + player.wrongAnswers + player.missedAnswers
    let answerSpeed = (answer) ? answer.speed : 10;

    player.answerSpeed = player.answerSpeed + ((answerSpeed - player.answerSpeed) / numQuestions);
  }

  updateDrinks (question, wrongPlayers) {
    let drinks;

    if (wrongPlayers.length == 0) {
      console.log('SOCIABLES!');
      return;
    }  else {
      drinks = Math.ceil(Object.keys(this.players).length * question.drink_multiplyer / wrongPlayers.length);
    }

    console.log(wrongPlayers);

    for (let player of wrongPlayers) {
      player.drinks += drinks;
      this.currentDrinks.push({
        drinks: drinks,
        name: player.name
      });
    }
  }

  compile () {
    for (let playerId in this.players) {
      let player = this.players[playerId];

      switch (true) {
        case (player.correctAnswers === this.mostCorrectAnswers.correctAnswers):
          if (player.answerSpeed < this.mostCorrectAnswers.answerSpeed) {
            break;
          }
        case this.mostCorrectAnswers.correctAnswers === undefined:
        case (player.correctAnswers > this.mostCorrectAnswers.correctAnswers):
          this.mostCorrectAnswers = player;
      }

      switch (true) {
        case (player.wrongAnswers === this.mostWrongAnswers.wrongAnswers):
          if (player.answerSpeed > this.mostWrongAnswers.answerSpeed) {
            break;
          }
        case this.mostWrongAnswers.wrongAnswers === undefined:
        case (player.wrongAnswers > this.mostWrongAnswers.wrongAnswers):
          this.mostWrongAnswers = player;
      }

      switch (true) {
        case (player.missedAnswers === this.mostMissedAnswers.wrongAnswers):
          if (player.answerSpeed > this.mostMissedAnswers.answerSpeed) {
            break;
          }
        case this.mostMissedAnswers.wrongAnswers === undefined:
        case (player.missedAnswers > this.mostMissedAnswers.wrongAnswers):
          this.mostMissedAnswers = player;
      }

      switch (true) {
        case (player.bestStreak === this.bestStreak.bestStreak):
          if (player.answerSpeed > this.bestStreak.answerSpeed) {
            break;
          }
        case this.bestStreak.bestStreak === undefined:
        case (player.bestStreak > this.bestStreak.bestStreak):
          this.bestStreak = player;
      }

      switch (true) {
        case (player.answerSpeed > this.bestAnswerSpeed.answerSpeed):
        case (this.bestAnswerSpeed.answerSpeed === undefined):
          this.bestAnswerSpeed = player;
      }

      switch (true) {
        case (player.drinks === this.mostDrinks.drinks):
          if (player.answerSpeed > this.mostDrinks.answerSpeed) {
            break;
          }
        case this.mostDrinks.drinks === undefined:
        case (player.drinks > this.mostDrinks.drinks):
          this.mostDrinks = player;
      }
    }
  }

  newPlayer (player: Player) {
    if (this.players[player.id]) {
      return;
    }

    this.players[player.id] =  {
      id: player.id,
      name: player.name,
      correctAnswers: 0,
      wrongAnswers: 0,
      missedAnswers: 0,
      answerSpeed: 0.0,
      bestStreak: 0,
      currentStreak : 0,
      drinks: 0
    };
  }
}
