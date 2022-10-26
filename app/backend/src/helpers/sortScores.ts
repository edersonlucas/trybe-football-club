export default (scores: Array<any>) => scores.sort((a, b) =>
  b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsOwn - a.goalsOwn);
