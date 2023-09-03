function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsScored(playerName) {
  const gameData = gameObject();

  // Check if the player is in the home team
  if (gameData.home.players.hasOwnProperty(playerName)) {
    console.log(
      `${playerName} scored ${gameData.home.players[playerName].points} points.`
    );
  }

  // Check if the player is in the away team
  else if (gameData.away.players.hasOwnProperty(playerName)) {
    console.log(
      `${playerName} scored ${gameData.away.players[playerName].points} points.`
    );
  } else {
    // If the player name is not found in either team, return an error message
    console.log(`${playerName} is not a valid player name.`);
  }
}

numPointsScored("Ben Gordon");

function shoeSize(playerName) {
  const gameData = gameObject();

  // Check if the player is in the home team
  if (gameData.home.players.hasOwnProperty(playerName)) {
    console.log(
      `${playerName} has a shoe size of ${gameData.home.players[playerName].shoe}.`
    );
  }

  // Check if the player is in the away team
  else if (gameData.away.players.hasOwnProperty(playerName)) {
    console.log(
      `${playerName} has a shoe size of ${gameData.away.players[playerName].shoe}.`
    );
  } else {
    // If the player name is not found in either team, return an error message
    console.log(`${playerName} is not a valid player name.`);
  }
}

shoeSize("Ben Gordon");

function teamColors(teamName) {
  const gameData = gameObject();
  // Check the teamName if is in the home team
  if (gameData.home.teamName === teamName) {
    console.log(`${teamName} has a colors of: `, gameData.home.colors);
  }
  // Check the teamName if is in the away team
  else if (gameData.away.teamName === teamName) {
    console.log(`${teamName} has a colors of: `, gameData.away.colors);
  }
  // If the team name is not found in either team, return an error message
  else {
    console.log(`${teamName} is not a valid team name.`);
  }
}

teamColors("Brooklyn Nets");
teamColors("Charlotte Hornets");
teamColors("Recoded");

function teamNames() {
  const gameData = gameObject();
  const teams = [];
  for (const team in gameData) {
    teams.push(gameData[team].teamName);
  }
  console.log(teams);
}

teamNames();

function playerNumbers(teamName) {
  const gameData = gameObject();
  const jerseyNumber = [];
  if (gameData.home.teamName === teamName) {
    const players = gameData.home.players;
    for (const key in players) {
      jerseyNumber.push(players[key].number);
    }
  } else if (gameData.away.teamName === teamName) {
    const players = gameData.away.players;
    for (const key in players) {
      jerseyNumber.push(players[key].number);
    }
  }
  console.log(`The ${teamName} has jersey number's of: `, jerseyNumber);
}

playerNumbers("Brooklyn Nets");
playerNumbers("Charlotte Hornets");

function playerStats(playerName) {
  const gameData = gameObject();

  // check if the player is on the home team
  if (gameData.home.players.hasOwnProperty(playerName)) {
    console.log(`${playerName}: `, gameData.home.players[playerName]);
  }
  // check if the player is on the away team
  else if (gameData.away.players.hasOwnProperty(playerName)) {
    console.log(`${playerName}: `, gameData.away.players[playerName]);
  }
  // If the player name is not found in either team, return an error message
  else {
    console.log(`${playerName} is not a valid player name.`);
  }
}

playerStats("Brendan Haywood");
playerStats("Alan Anderson");
playerStats("Salah");

// Bonus Questions
// Which player has the most points? Call the function mostPointsScored.
function mostPointsScored() {
  const gameData = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = "";

  for (const team in gameData) {
    for (const playerName in gameData[team].players) {
      if (gameData[team].players[playerName].points > mostPoints) {
        mostPoints = gameData[team].players[playerName].points;
        playerWithMostPoints = playerName;
      }
    }
  }

  return playerWithMostPoints;
}

// max shoe and rebounds credit to the Amazing Menar 😍
function bigShoeRebounds() {
  let object = gameObject();

  let getPlayresHome = (object) => {
    for (let playersHome in object.home) {
      return playersHome, object.home["players"];
    }
  };

  let getPlayresAway = (object) => {
    for (let playersAway in object.away) {
      return playersAway, object.away["players"];
    }
  };
  let players1 = getPlayresHome(object);
  let players2 = getPlayresAway(object);
  let players = { ...players1, ...players2 };
  let state = Object.values(players);
  let maxShoe = Math.max(...state.map(({ shoe }) => shoe));
  let statearr = state.filter((obj) => {
    return obj.shoe === maxShoe;
  });
  let rebounds = statearr.map((obj) => {
    return obj.rebounds;
  });
  return { rebounds: rebounds[0], maxShoe };
}

console.log(bigShoeRebounds());

// Which team has the most points? Call the function winningTeam.
function winningTeam() {
  const gameData = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  for (const playerName in gameData.home.players) {
    homeTeamPoints += gameData.home.players[playerName].points;
  }

  for (const playerName in gameData.away.players) {
    awayTeamPoints += gameData.away.players[playerName].points;
  }

  return homeTeamPoints > awayTeamPoints
    ? gameData.home.teamName
    : gameData.away.teamName;
}

// Which player has the longest name? Call the function playerWithLongestName.
function playerWithLongestName() {
  const gameData = gameObject();
  let longestName = "";

  for (const team in gameData) {
    for (const playerName in gameData[team].players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }

  return longestName;
}

console.log("Player with the most points:", mostPointsScored());
console.log("Winning team:", winningTeam());
console.log("Player with the longest name:", playerWithLongestName());

// Super Bonus
// Write a function that returns true if the player with the longest name had the most steals. Call the function
function doesLongNameStealATon() {
  const gameData = gameObject();
  let longestName = "";
  let playerWithMostSteals = "";
  let mostSteals = 0;

  for (const team in gameData) {
    for (const playerName in gameData[team].players) {
      const playerStats = gameData[team].players[playerName];

      if (playerName.length > longestName.length) {
        longestName = playerName;
      }

      if (playerStats.steals > mostSteals) {
        mostSteals = playerStats.steals;
        playerWithMostSteals = playerName;
      }
    }
  }

  return longestName === playerWithMostSteals;
}

console.log(
  "Does the player with the longest name steal a ton?",
  doesLongNameStealATon()
);
