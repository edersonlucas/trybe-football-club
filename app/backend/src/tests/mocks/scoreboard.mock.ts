export const findAllTeamMock = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  }
]

export const findAllMatchMock = [
  {
    "id": 1,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 2,
    "awayTeamGoals": 5,
    "inProgress": false,
  },
  {
    "id": 2,
    "homeTeam": 2,
    "homeTeamGoals": 5,
    "awayTeam": 1,
    "awayTeamGoals": 5,
    "inProgress": false,
  },
  {
    "id": 3,
    "homeTeam": 3,
    "homeTeamGoals": 10,
    "awayTeam": 2,
    "awayTeamGoals": 3,
    "inProgress": false,
  },
  {
    "id": 4,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 5,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 5,
    "inProgress": true,
  },
]

export const findAllMatchHomeMock = [
  {
    "id": 1,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 2,
    "awayTeamGoals": 5,
    "inProgress": false,
  },
  {
    "id": 4,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 5,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 5,
    "inProgress": true,
  },
]

export const getAllResponse = [
  {
    name: 'Botafogo',
    totalPoints: 7,
    totalGames: 5,
    totalVictories: 2,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 26,
    goalsOwn: 14,
    goalsBalance: 12,
    efficiency: '46.67'
  },
  {
    name: 'Bahia',
    totalPoints: 4,
    totalGames: 5,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 1,
    goalsFavor: 19,
    goalsOwn: 21,
    goalsBalance: -2,
    efficiency: '26.67'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 4,
    totalGames: 5,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 2,
    goalsFavor: 14,
    goalsOwn: 26,
    goalsBalance: -12,
    efficiency: '26.67'
  }
]

export const getAllHomeResponse = [
  {
    name: 'Bahia',
    totalPoints: 3,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 11,
    goalsOwn: 6,
    goalsBalance: 5,
    efficiency: '33.33'
  },
  {
    name: 'Botafogo',
    totalPoints: 3,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 11,
    goalsOwn: 6,
    goalsBalance: 5,
    efficiency: '33.33'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 3,
    totalGames: 3,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 2,
    goalsFavor: 6,
    goalsOwn: 11,
    goalsBalance: -5,
    efficiency: '33.33'
  }
]

export const findAllMatchAwayMock = [
  {
    "id": 4,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 1,
    "inProgress": false,
  },
  {
    "id": 5,
    "homeTeam": 1,
    "homeTeamGoals": 2,
    "awayTeam": 3,
    "awayTeamGoals": 5,
    "inProgress": true,
  },
]

export const getAllAwayResponse = [
  {
    name: 'Botafogo',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 6,
    goalsOwn: 4,
    goalsBalance: 2,
    efficiency: '50.00'
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 4,
    goalsOwn: 6,
    goalsBalance: -2,
    efficiency: '50.00'
  },
  {
    name: 'Bahia',
    totalPoints: 0,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 6,
    goalsOwn: 4,
    goalsBalance: 2,
    efficiency: '0.00'
  }
]

export const errorResponse = { message: 'Internal Server Error!' }