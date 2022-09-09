const gameObject = () => {
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
                      "Reggie Evens": {
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
                      "Bismack Biyombo": {
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
                      "Brendan Hayword": {
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

const players = {...gameObject().home.players, ...gameObject().away.players};
// console.log(players);

//function to return player's points
const numPointsScored = (playerName) => {
    let points = 0;
    for (let player in players) {
          if (player === playerName) {
                points = players[player].points;
          }
    }
    return points;
}

const shoeSize = (playerName) => {
    for (let player in players) {
          if (player === playerName) {
                return players[player].shoe;
          }
    }
}

const teamColors = (teamName) => {
    return gameObject().home.teamName === teamName ? gameObject().home.colors : gameObject().away.colors;
}

const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName];
}

const playerNumbers = (team) => {
    const teamData = gameObject().home.teamName === team ? gameObject().home.players : gameObject().away.players;
    const playerNumbers = [];
    for (let player in teamData) {
          playerNumbers.push(teamData[player].number);
    }
    return playerNumbers;

}

const playerStats = (playerName) => {
    for (let player in players) {
          if (player === playerName) {
                return players[player];
          }
    }
}

const bigShoeRebounds = () => {
    let biggestShoe = 0;
    let biggestShoeRebounds = 0;
    for (let player in players) {
          if (players[player].shoe > biggestShoe) {
                biggestShoe = players[player].shoe;
                biggestShoeRebounds = players[player].rebounds;
          }
    }
    console.log(biggestShoe);
    return biggestShoeRebounds;
}

const mostPoints = () => {
    let mostPoints = 0;
    let mostPointsPlayer = "";
    for (let player in players) {
          if (players[player].points > mostPoints) {
                mostPoints = players[player].points;
                mostPointsPlayer = player;
          }
    }
    return mostPointsPlayer;
}

const winningTeam = () => {
    const homeTeam = gameObject().home.players;
    const awayTeam = gameObject().away.players;
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (let player in homeTeam) {
          homeTeamPoints += homeTeam[player].points;
    }
    for (let player in awayTeam) {
          awayTeamPoints += awayTeam[player].points;
    }
    return homeTeamPoints > awayTeamPoints ? gameObject().home.teamName : gameObject().away.teamName;
}


const longestName = () => {
    let longestName = "";
    for (let player in players) {
          if (player.length > longestName.length) {
                longestName = player;
          }
    }
    return longestName;
}

const mostSteals = () => {
    let mostSteals = 0;
    let mostStealsPlayer = "";
    for (let player in players) {
          if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals;
                mostStealsPlayer = player;
          }
    }
    return mostStealsPlayer;
}

const doesLongNameStealATon = () => {
    return longestName() === mostSteals();
}


console.log(longestName());

console.log(winningTeam());



console.log(bigShoeRebounds());

console.log(playerStats("Jeff Adrien"));

console.log(playerNumbers("Brooklyn Nets"));

console.log(teamNames());

console.log(teamColors("Brooklyn Nets"));

console.log(numPointsScored("Jeff Adrien"));
console.log(numPointsScored("Bismack Biyombo"));

console.log(shoeSize("Jeff Adrien"));