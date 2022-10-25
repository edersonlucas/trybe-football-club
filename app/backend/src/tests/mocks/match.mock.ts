export const findAllMock = [
  {
		"id": 40,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 41,
		"homeTeam": 16,
		"homeTeamGoals": 2,
		"awayTeam": 9,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Internacional"
		}
	}
]

export const findAllByQueryInProgressMock = [
  {
		"id": 41,
		"homeTeam": 16,
		"homeTeamGoals": 2,
		"awayTeam": 9,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 42,
		"homeTeam": 6,
		"homeTeamGoals": 1,
		"awayTeam": 1,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"teamName": "Avaí/Kindermann"
		}
	}
]

export const insertMatch = {
  "homeTeam": 16,
  "awayTeam": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

export const insertMatchInvalid = {
  "homeTeam": 16,
  "awayTeam": 16,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
}

export const insertMatchResponse = {
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
}

export const insertEqualTeamsResponse = { message: "It is not possible to create a match with two equal teams" }

export const updateMatchMock = {
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": false,
}

export const updateScoreMock = {
	"id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 3,
  "inProgress": false,
}

export const updateScore = {
	"homeTeamGoals": 2,
	"awayTeamGoals": 3,
}

export const finishSuccessResponse = { message: "Finished" }

export const scoreUpdateSuccessResponse = { message: "Scoreboard updated successfully!" }

export const scoreUpdateErrorResponse = { message: "There was an error updating scoreboard" }

export const finishErrorResponse = { message: "There was an error updating status" }

export const token = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjY2NDg1MDE4fQ.KJJSko_cbPTKSi2V8mvrKFJcken9qMGGqM346khej04'}