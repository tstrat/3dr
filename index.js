// 3DR

const dieRoller = (numberOfRolls, sides, staticModifier = 0) => {
    let arr = [];
    for (let i = 0; i < numberOfRolls; i++) {
        arr.push(Math.floor(Math.random() * sides + 1));
    }
    let total = arr.reduce((t, n) => n + t, 0) + staticModifier;
    return [arr, staticModifier, total ];
}

const d20Rolls = (staticModifier = 0) => {
    const first = dieRoller(1, 20, staticModifier);
    const second = dieRoller(1, 20, staticModifier);
    const rtn = [ first[0].concat(second[0]), staticModifier, [first[2], second[2]] ];
    return rtn;
}

const splitDiceRollString = (inputStr) => {
    return inputStr.match(/\d+/gi);
}

const d20adv = (staticModifier = 0) => {
    const rolls = d20Rolls(staticModifier);
    return [ Math.max(rolls[0][0], rolls[0][1]), staticModifier, Math.max(rolls[0][0], rolls[0][1])];
}

const d20disAdv = (staticModifier = 0) => {
    const rolls = d20Rolls(staticModifier);
    return [ Math.min(rolls[0][0], rolls[0][1]), staticModifier, Math.min(rolls[0][0], rolls[0][1])];
}

const critDamage = (numberOfRolls, sides, staticModifier = 0) => {
    const first = dieRoller(numberOfRolls, sides, staticModifier);
    const second = dieRoller(numberOfRolls, sides, staticModifier);
    total = first[0].reduce((t, n) => n + t, 0) + second[0].reduce((t, n) => n + t, 0) + staticModifier;
    return [ first[0].concat(second[0]), staticModifier, total ];
}

const simpleRoll = (sides = 20) => {
    return Math.floor(Math.random() * sides + 1);
}

const dieRollString = (numberOfRolls, sides, staticModifier) => {
    let str = '';
    
    const roll = dieRoller(numberOfRolls, sides, staticModifier);
    roll;
    str += `( ${roll[0].join(', ')} ) + ${roll[1]} = ${roll[2]}`;
    return str;
}


module.exports = {
    critDamage,
    d20Rolls,
    d20adv,
    d20disAdv,
    dieRoller,
    dieRollString,
    simpleRoll,
    splitDiceRollString,
}