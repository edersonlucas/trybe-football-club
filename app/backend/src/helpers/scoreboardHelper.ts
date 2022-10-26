import Match from '../database/models/Match';

function calculatePoints(matches: Match[], id: number) {
  let sumPoints = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      sumPoints += 1;
    } else if ((match.homeTeam === id && match.homeTeamGoals > match.awayTeamGoals)
    || (match.awayTeam === id && match.awayTeamGoals > match.homeTeamGoals)) {
      sumPoints += 3;
    }
  });
  return sumPoints;
}

function calculateWins(matches: Match[], id: number) {
  let sumWins = 0;
  matches.forEach((match) => {
    if ((match.homeTeam === id && match.homeTeamGoals > match.awayTeamGoals)
      || (match.awayTeam === id && match.awayTeamGoals > match.homeTeamGoals)) {
      sumWins += 1;
    }
  });
  return sumWins;
}

function calculateDraws(matches: Match[]) {
  let sumDraws = 0;
  matches.forEach((match) => {
    if (match.homeTeamGoals === match.awayTeamGoals) {
      sumDraws += 1;
    }
  });
  return sumDraws;
}

function calculateLosses(matches: Match[], id: number) {
  let sumLosses = 0;
  matches.forEach((match) => {
    if ((match.homeTeam === id && match.homeTeamGoals < match.awayTeamGoals)
    || (match.awayTeam === id && match.awayTeamGoals < match.homeTeamGoals)) {
      sumLosses += 1;
    }
  });
  return sumLosses;
}

function calculateGoals(matches: Match[], id: number) {
  let sumGoalsFavor = 0;
  let sumGoalsOwn = 0;

  matches.forEach((match) => {
    if (match.homeTeam === id) {
      sumGoalsFavor += match.homeTeamGoals;
      sumGoalsOwn += match.awayTeamGoals;
    } else {
      sumGoalsFavor += match.awayTeamGoals;
      sumGoalsOwn += match.homeTeamGoals;
    }
  });
  return {
    goalsFavor: sumGoalsFavor,
    goalsOwn: sumGoalsOwn,
    goalsBalance: sumGoalsFavor - sumGoalsOwn,
  };
}

export default (matches: Match[], id: number) => {
  const totalPoints = calculatePoints(matches, id);
  const totalGames = matches.length;
  const totalVictories = calculateWins(matches, id);
  const totalDraws = calculateDraws(matches);
  const totalLosses = calculateLosses(matches, id);
  const { goalsFavor, goalsOwn, goalsBalance } = calculateGoals(matches, id);
  const efficiency = ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
  return {
    totalPoints,
    totalGames,
    totalVictories,
    totalDraws,
    totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance,
    efficiency,
  };
};
