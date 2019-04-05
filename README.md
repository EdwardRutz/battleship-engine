# Javascript Testing - Battleship Engine

Test Driven Design with MOCHA and CHAI to create a game engine (no GUI) to play the classic game, Battleship.


## Tech & Dependencies

- Javascript
- NPM
- Mocha
- Chai

## Install Project

- Download from git
- Install dependencies `npm install`
- Run Tests, `npm test`

- Install Mocha globally, ` npm install --global mocha `
- Install Mocha as a development dependency, ` npm install --save-dev mocha `
- test

## Issues and Fixes

- Keep in mind, git commits from CodeAnywhere will not show up in contribution activity unless you add your CodeAnywhere email address to Github.Keep
- https://help.github.com/en/articles/why-are-my-contributions-not-showing-up-on-my-profile



--------------------------------------------------------------
# Notes
--------------------------------------------------------------

## Notes

- A unit test are also called "spec"
- Install Mocha and Chai into a project: `npm install --save-dev mocha chai`
- To create a basic package.json file in project and select dependencies, use: `npm init`
- Mocha will test all files in the "test" folder. Naming the folder "Test", "tests", "Tests", etc. is invalid.
- The test folder must be named "test" and be located in the same directory as package.json
- Create a test suit containing unit tests using the describe function.
    ` describe('...', function(){...}); `
- Specs/unit tests are created by, ` it('...', function(){...}); ` function.
- The `it()` unit test has two arguments: 
    1. a string stating what the function will test,
    2. a function with the expectations or state for the test to meet and pass

```
    describe(' ', function(){
    });
``` 

- If writing test for a function is difficult, maybe the code is not needed?
- Good unit tests improve code.Good


## Mocha Reporters to Format Test Output

```
  mocha --reporter min
  mocha --reporter markdown
  mocha --reporter landing
  mocha --reporter nyan
```
- [Docs: Mocha Reporters](https://mochajs.org/#reporters)

## More BDD Assertions

- `.not`
- `.empty`, checks for empty objects, arrays, or strings.
- `.deep`, make deep equality comparisons. Similiar looking arrays are "deeply equal" because the deep internal value are equal.
- `.include`
- `.equal`
- `not.equal`
- `deep.equal`

## Watching Test Files

- Run test everytime the `game_instance` file is changed
- ` mocha --watch <path to game test file> <path to function file> `
  - ` mocha --watch ./test/game_test.js ./game_logic/game_instance.js `
- Run unit test anytime changes are made anywhere, add --watch command to package.json
  - Run the all tests in the test directory and watch for any changes in the current directory
  - Make sure to add a period ()".") at the beginning of your directory path or mocha will get confused.
  - run by typing in the terminal, `npm run test:watch`
  - Stop running --watch by typing, `Ctrl + C`
  - Watch specific files by creating a command in package.json, scripts, 
     `"test:watch:playerMethods" : "mocha --watch ./test/player_test.js ./game_logic/player_methods.js"`
  
  ```
  "scripts": {
    "test" : "mocha",
    "test:watch" : "mocha --watch ./test ./"
  }
  ```
 - Add a reporter flag for minimum output, `"test:watch" : "mocha --watch  ./test ./ --reporter min"`
 
## Mochs and Stubs

- [Sinon.js Mocks and Stubs](http://sinonjs.org/docs/]
- Use fake helpers/functions needed for testing with external dependencies

## Testing Asynchronouse Code with Mocha

- Delay running expectations until until needed
- https://mochajs.org/#asynchronous-code
- One second = 1000 ms



<quote>
- Mocha allows us to say that a test spec or test suite is "asynchronous"
- Passing an argument to the internal function of a describe() or it() block will tell Mocha to wait on running our expectations until we specifically say so
- Passing the done argument to our test spec tells Mocha that it’s supposed to wait for our instructions before checking our expectations.
- Mocha will wait for done() to fire before checking the expectations
</quote>







--------------------------------------------------------------
# Reference
--------------------------------------------------------------

## Git Notes

- Sometimes git updates in CodeAnywhere may not work completely. A commit is registered on Github but changes are not added.
- This git protocol works with Code Anywhere. 
```
git add -A // To track all files
git commit -am "message" // To commit changes
git push origin master // Push your local changes to github
```
- `git add . ` will add all files, tracked and untracked.
- `git remote -v` shows location/repo being pushed to
-A, --all, --no-ignore-removal
  - Adds changes to all tracked files.  
  - "Update the index not only where the working tree has a file matching <pathspec> but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree."
  - "If no <pathspec> is given when -A option is used, all files in the entire working tree are updated (old versions of Git used to limit the update to the current directory and its subdirectories)."

-a, --all, 
  - "Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected."

- [Git Docs](https://git-scm.com/docs)


## Sources

- [TeamTreehouse Tutorial: Getting Started with Mocha and Chai](https://teamtreehouse.com/library/javascript-unit-testing/behavior-driven-development-with-mocha-chai/getting-started-with-mocha-and-chai)
- [ER Github: battleship-engine](https://github.com/EdwardRutz/battleship-engine)
- [Original Battleship Game](https://www.hasbro.com/en-us/product/battleship-game-retro-series-1967-edition:F9D20F7E-2C1D-4261-BB10-FF8B648AA5C8)
- [NPM: Create Package.json](https://docs.npmjs.com/cli/init)
- [mochajs.org](https://mochajs.org/)
- [chaijs.org](http://chaijs.com/api/bdd/)
- [Webstorm Running Unit Tests on Mocha](https://www.jetbrains.com/help/webstorm/2018.1/running-unit-tests-on-mocha.html)
- [Chai Docs: BDD](https://www.chaijs.com/api/bdd/)
- [Wikipedia: Battleship](https://en.wikipedia.org/wiki/Battleship)
- https://sinonjs.org/https


--------------------------------------------------------------
# Unit Tests
--------------------------------------------------------------

# TOC
   - [GAME INSTANCE FUNCTIONS](#game-instance-functions)
     - [checkGameStatus](#game-instance-functions-checkgamestatus)
     - [takeTurn](#game-instance-functions-taketurn)
     - [saveGame](#game-instance-functions-savegame)
   - [Mocha](#mocha)
   - [PLAYER METHODS](#player-methods)
     - [validateLocation](#player-methods-validatelocation)
     - [validateLocations](#player-methods-validatelocations)
     - [placeShip](#player-methods-placeship)
   - [checkForShip](#checkforship)
   - [damageShip](#damageship)
   - [fire](#fire)
<a name=""></a>

<a name="game-instance-functions"></a>
# GAME INSTANCE FUNCTIONS
<a name="game-instance-functions-checkgamestatus"></a>
## checkGameStatus
should tell me when the game is over.

```js
var players = [
  {
    ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]]
            }
    ]
  }
];
var actual = checkGameStatus(players);
expect(actual).to.be.false;
```

<a name="game-instance-functions-taketurn"></a>
## takeTurn
should return false if the game ends.

```js
var actual = takeTurn(player, guess);
expect(actual).to.be.false;
```

<a name="game-instance-functions-savegame"></a>
## saveGame
should update save status.

```js
var status = 'Game not saved...';

saveGame(function () {
  status = 'Game saved!';
  expect(status).to.equal('Game saved!');
  done();
});
```

<a name="mocha"></a>
# Mocha
should run tests using npm.

```js
expect(true).to.be.ok;       //ok is a Chai assertion method that checks if a value is truthy
```

<a name="player-methods"></a>
# PLAYER METHODS
<a name="player-methods-validatelocation"></a>
## validateLocation
shoud confirm valid for unoccupied locations in range.

```js
var location = [0, 0];
var actual = validateLocation(player, location);
expect(actual).to.be.ok;
```

shoud confirm INvalid for occupied locations in range.

```js
var location = [9, 9];
var actual = validateLocation(player, location);
expect(actual).to.be.false;
```

shoud confirm INvalid for UNoccupied locations OUT of range.

```js
var locationHigh = [10, 10];
var locationLow = [-1, -1];
expect(validateLocation(player, locationHigh)).to.be.false;
expect(validateLocation(player, locationLow)).to.be.false;
```

<a name="player-methods-validatelocations"></a>
## validateLocations
should correctly report a list of unoccupied locations is valid.

```js
var locations = [[1, 1], [1, 2], [1, 3], [1, 4]];
expect(validateLocations(player, locations)).to.be.ok;
```

should correctly report a a problem if any location in the list is invalid.

```js
var locations = [[1, 1], [1, 2], [1, 3], [10, 10]];
expect(validateLocations(player, locations)).to.be.false;
locations = [[1, 1], [1, 2], [1, 3], [0, 0]];
expect(validateLocations(player, locations)).to.be.false;
```

<a name="player-methods-placeship"></a>
## placeShip
should update a ship with a valid starting location.

```js
var ship = player.ships[0];
var coordinates = [0, 1];
placeShip(player, ship, coordinates, 'horizontal');
var actual = ship.locations;
expect(actual).to.be.ok;
expect(actual).to.have.length(1);
expect(actual[0]).to.deep.equal([0, 1]);
```

should throw an error if no direction is specified.

```js
var ship = player.ships[0];
var coordinates = [0, 1];

                        var handler = function () { placeShip(player, ship, coordinates); };
                        expect(handler).to.throw(Error);
                        expect(handler).to.throw('You left out the direction! I need that for math!');
```

<a name="checkforship"></a>
# checkForShip
should correctly report no ship at a given players coordinate.

```js
expect(checkForShip(player, [9, 9])).to.be.false;
```

should correctly report a ship  located at a given coordinates.

```js
expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
```

should handle ships located at more than one coordinate.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [9, 9])).to.be.false;
```

should check for multiple ships.

```js
expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [1,0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1,1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2,3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
```

<a name="damageship"></a>
# damageShip
should register damage on a given ship at a given location.

```js
var ship = {
  locations: [[0, 0]],
  damage: []
};
damageShip(ship, [0, 0]);
expect(ship.damage).to.not.be.empty;
expect(ship.damage[0]).to.deep.equal([0, 0]);
```

<a name="fire"></a>
# fire
should report damage on a players ship at a coordinate.

```js
fire(player, [0,0]);
expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
```

should NOT record damage if there is no ship at coordinate.

```js
fire(player, [9,9]);
    expect(player.ships[0].damage).to.be.empty;
```
