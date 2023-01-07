console.log('#1');
// #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

console.log('#2');
// #2
if(BMIMark > BMIJohn){
    console.log(`BMI Mark (${BMIMark}) lớn hơn BMIJohn (${BMIJohn})`);
}else{
    console.log(`BMIJohn (${BMIJohn}) lớn hơn BMI Mark (${BMIMark}) `)
}

console.log('#3');
// #3
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win');
}else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log('Koalas win');
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both win');
}else {
    console.log('no one win');
}

console.log('#4');
// #4
console.log('Test for bill values 275');
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`Bill là ${bill}, Tip là ${tip}, Tổng ${bill + tip}`);

console.log('Test for bill values 40');
const bill2 = 40;
const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`Bill là ${bill2}, Tip là ${tip2}, Tổng ${bill2 + tip2}`);

console.log('Test for bill values 430');
const bill3 = 430;
const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`Bill là ${bill3}, Tip là ${tip3}, Tổng ${bill3 + tip3}`);