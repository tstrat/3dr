# Dungeons and Dragons Dice Roller (3DR)
## By Travis Stratton

Different Functions for the die roller include:
- critDamage
- d20Rolls
- d20adv
- d20disAdv
- dieRoller
- dieRollString
- simpleRoll
- splitDiceRollString


### Basic Functions:
`DiRoller`

BasicUsage
```js
simpleRoll(sides) // returns a single die roll no mods

//ex:
    simpleRoll(20) => 3;

dieRoller(count, sides, modifier) // mod is optional
result = [ die roll, modifier, total];

// ex:
    dieRoller(2, 6, 3) => [ [1,2], 3, 6 ] // 2d6 + 3

dieRollString(roll) // Converts the die rolls to a string

// ex:
    dieRollString([ [1,2], 3, 6 ]) => "(1, 2) + 3 = 6"
```