/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let jonAttack = 25
let jamieAttack = 35


if (jonAttack > jamieAttack){
    console.log(`jon's attack is greater than jamie's attack`)
} else if (jonAttack <jamieAttack) {
    console.log(`jamie's attack is greater than jon's`)
} else  {
    console.log(`their attacks are the same`)
}

let jonHealth = 100
let jonDefense = 0

if (jonHealth <= jamieAttack){
    console.log(`jon has been slain`)
} else{
    jonHealth -= jamieAttack
    console.log(`jon's health health is now ${jonHealth}`)
}

jonDefense += 15

if (jonHealth <= jamieAttack - jonDefense){
    console.log(`jon has been slain`)
} else {
    jonHealth -= jamieAttack -jonDefense
    console.log (`jon's health is now ${jonHealth}`)
}

if ((jonHealth +50) >= 100){
    jonHealth = 100
} else {
    jonHealth +=50
}
console.log (`jon's health after bandage is ${jonHealth}`)

let bandage = 5
for (let i = 1; i <= 5; i++ ){
    if(jonHealth<50 && bandage > 0 ){
        jonHealth +=50
        bandage--
        console.log(`jon used a bandage. he has ${bandage} remaining. His health is now ${jonHealth}`)
    }
    if (jonHealth <= jamieAttack - jonDefense ){
        console.log (`jon has been slain`)
    } else {
        jonHealth -= jamieAttack - jonDefense
        console.log(`jon's health is ${jonHealth}`)
    }
}

let hits = 0
while(jonHealth>0){
    if(jonHealth<50 && bandage > 0 ){
        jonHealth +=50
        bandage--
        console.log(`jon used a bandage. he has ${bandage} remaining. His health is now ${jonHealth}`)
    }
    jonHealth -= jamieAttack - jonDefense
    hits++
}

console.log(hits)