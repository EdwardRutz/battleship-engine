# Javascript Testing - Battleship Engine

JAVASCRIPT, BDD with MOCH, CHAI to create a game engine (no GUI) to play the classic game, Battleship.

- [ ] Work in Progress



## Dependencies
- Node.js
- Mocha
- Chia

## Install Project

- Download from git
- Install dependencies `npm install`

## Run Tests

- `npm test`


## Notes

- Install Mocha and Chai into a project: `npm install --save-dev mocha chai`
- To create a basic package.json file in project and select dependencies, use: `npm init`
- Mocha will test all files in the "test" folder.
- The test folder must be named "test" and be located in the same directory as package.json
- Create a test suit using the describe function.`describe('...', function(){...});
- `describe()` takes two arguments: 
    1. a string describing what test will cover, 
    2. an anonymous function which serves as a "wrapper" for all the unit tests in the test suite
- A unit test are also called "spec"
- Specs/unit tests are created by, `it('...', function(){...});` function.
- `it()` has two arguments: 
    1. a string stating what the function will test,
    2. a function with the expectations or state for the test to meet and pass

```
    describe(' ', function(){
    });
``` 


## Sources

- [TeamTreehouse: Getting Started with Mocha and Chai](https://teamtreehouse.com/library/javascript-unit-testing/behavior-driven-development-with-mocha-chai/getting-started-with-mocha-and-chai)
- [ER Github: battleship-engine](https://github.com/EdwardRutz/battleship-engine)
- [Original Battleship Game](https://www.hasbro.com/en-us/product/battleship-game-retro-series-1967-edition:F9D20F7E-2C1D-4261-BB10-FF8B648AA5C8)
- [NPM: Create Package.json](https://docs.npmjs.com/cli/init)
- [mochajs.org](https://mochajs.org/)
- [chaijs.org](http://chaijs.com/api/bdd/)
- [Webstorm Running Unit Tests on Mocha](https://www.jetbrains.com/help/webstorm/2018.1/running-unit-tests-on-mocha.html)
