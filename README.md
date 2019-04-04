# Javascript Testing - Battleship Engine

Test Driven Design with MOCHA and CHAI to create a game engine (no GUI) to play the classic game, Battleship.

- WIP



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


### Mocha Reporters to Format Test Output

```
  mocha --reporter min
  mocha --reporter markdown
  mocha --reporter landing
  mocha --reporter nyan
```
- [Docs: Mocha Reporters](https://mochajs.org/#reporters)

### More BDD Assertions

- `.not`
- `.empty`, checks for empty objects, arrays, or strings.
- `.deep`, make deep equality comparisons. Similiar looking arrays are "deeply equal" because the deep internal value are equal.
- `.include`
- `.equal`
- `not.equal`
- `deep.equal`

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
