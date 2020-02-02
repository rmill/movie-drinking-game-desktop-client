import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Answer, Player, Question } from './game.service';

@Injectable()
export class StatisticsService {

  public drinkers: BehaviorSubject<Player[]>

  constructor() {
    this.drinkers = new BehaviorSubject([])
  }

  getResults (players: Player[]) {
    const correct = []
    const incorrect = []
    const missed = []
    const drinks = []
    const speed = []
    const streak = []

    for (let player of players) {
      this.addStat(correct, player.correct_answers, player)
      this.addStat(drinks, player.drinks, player)
      this.addStat(incorrect, player.incorrect_answers, player)
      this.addStat(missed, player.missed_answers, player)
      this.addStat(speed, Math.floor(player.answer_speed / 100), player)
      this.addStat(streak, player.best_streak, player)
    }

    return {
      correct: this.flattenResults(correct).reverse(),
      drinks: this.flattenResults(drinks).reverse(),
      incorrect: this.flattenResults(incorrect).reverse(),
      missed: this.flattenResults(missed).reverse(),
      speed: this.flattenResults(speed),
      streak: this.flattenResults(streak).reverse()
    }
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

  private addStat(rankings, score, player) {
    if (!rankings[score]) rankings[score] = []
    rankings[score].push(player)
  }

  private flattenResults(results) {
    let flattenedResults = []

    for (let result of results) {
      if (result) flattenedResults.push(result)
    }

    return flattenedResults
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
      this.increment(player, 'drinks');
    }

    player.answer_speed = this.getAnswerSpeed(player, answer)

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

  private getAnswerSpeed (player: Player, answer: Answer) {
    let numQuestions = player.correct_answers + player.incorrect_answers + player.missed_answers
    let answerSpeed = answer ? answer.speed : 10000;

    if (!player.answer_speed) player.answer_speed = 0

    return player.answer_speed + ((answerSpeed - player.answer_speed) / numQuestions);
  }
}
