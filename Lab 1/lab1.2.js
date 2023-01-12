console.log('----------LAB 1.2----------');
for (const [i, player] of game.scored.entries())
console.log(`Goal ${1 + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds))
average += odd;
average /= odds.length;
console.log(average);

for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${odd}`);
}