import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Answer, Player, Question } from './game.service';

@Injectable()
export class StatisticsService {

  public drinkers: BehaviorSubject<Player[]>

  constructor() {
    this.drinkers = new BehaviorSubject([])
  }

  getStats (playerToken) {
    // return this.players[playerToken];
    return {}
  }

  process (question: Question, answers: any, players: Player[]) {
    let drinkers = [];

    for (let player of players) {
      let answer = answers[player.id];
      let isDrinking = this.updatePlayer(question, answer, player)
      if (isDrinking) drinkers.push(player)
    }

    this.drinkers.next(drinkers)
  }

  private updatePlayer(question, answer, player) {
    let isWrong = false;

    if (answer) {
      if (question.correct_answers.indexOf(answer.answer) >= 0) {
        this.increment(player, 'correct_answers');
        this.increment(player, 'current_streak');
        player.best_streak = this.max(player.current_streak, player.best_streak)
      } else {
        this.increment(player, 'incorrect_answers');
        isWrong = true;
      }
    } else {
      this.increment(player, 'missed_answers');
      isWrong = true;
    }

    if (isWrong) {
      player.current_streak = 0;
      this.increment(player, 'drinks', question.drink_multiplyer);
    }

    return isWrong
  }

  private increment(player, index, amount = 1) {
    if (!Number.isInteger(player[index])) player[index] = 0
    player[index] += amount
  }

  private max(value1, value2) {
    if (!Number.isInteger(value1)) value1 = 0
    if (!Number.isInteger(value2)) value2 = 0
    return Math.max(value1, value2)
  }

  updateAnswerSpeed (player, speed) {
    // let numQuestions = player.correctAnswers + player.wrongAnswers + player.missedAnswers
    // let answerSpeed = (answer) ? answer.speed : 10;
    //
    // player.answerSpeed = player.answerSpeed + ((answerSpeed - player.answerSpeed) / numQuestions);
  }

  compile () {
    // for (let playerId in this.players) {
    //   let player = this.players[playerId];
    //
    //   switch (true) {
    //     case (player.correctAnswers === this.mostCorrectAnswers.correctAnswers):
    //       if (player.answerSpeed < this.mostCorrectAnswers.answerSpeed) {
    //         break;
    //       }
    //     case this.mostCorrectAnswers.correctAnswers === undefined:
    //     case (player.correctAnswers > this.mostCorrectAnswers.correctAnswers):
    //       this.mostCorrectAnswers = player;
    //   }
    //
    //   switch (true) {
    //     case (player.wrongAnswers === this.mostWrongAnswers.wrongAnswers):
    //       if (player.answerSpeed > this.mostWrongAnswers.answerSpeed) {
    //         break;
    //       }
    //     case this.mostWrongAnswers.wrongAnswers === undefined:
    //     case (player.wrongAnswers > this.mostWrongAnswers.wrongAnswers):
    //       this.mostWrongAnswers = player;
    //   }
    //
    //   switch (true) {
    //     case (player.missedAnswers === this.mostMissedAnswers.wrongAnswers):
    //       if (player.answerSpeed > this.mostMissedAnswers.answerSpeed) {
    //         break;
    //       }
    //     case this.mostMissedAnswers.wrongAnswers === undefined:
    //     case (player.missedAnswers > this.mostMissedAnswers.wrongAnswers):
    //       this.mostMissedAnswers = player;
    //   }
    //
    //   switch (true) {
    //     case (player.bestStreak === this.bestStreak.bestStreak):
    //       if (player.answerSpeed > this.bestStreak.answerSpeed) {
    //         break;
    //       }
    //     case this.bestStreak.bestStreak === undefined:
    //     case (player.bestStreak > this.bestStreak.bestStreak):
    //       this.bestStreak = player;
    //   }
    //
    //   switch (true) {
    //     case (player.answerSpeed > this.bestAnswerSpeed.answerSpeed):
    //     case (this.bestAnswerSpeed.answerSpeed === undefined):
    //       this.bestAnswerSpeed = player;
    //   }
    //
    //   switch (true) {
    //     case (player.drinks === this.mostDrinks.drinks):
    //       if (player.answerSpeed > this.mostDrinks.answerSpeed) {
    //         break;
    //       }
    //     case this.mostDrinks.drinks === undefined:
    //     case (player.drinks > this.mostDrinks.drinks):
    //       this.mostDrinks = player;
    //   }
    // }
  }
}
