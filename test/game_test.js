var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
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
    });
  });
  
  //Let players take a turn, guess a location, fire on location, check game status and stop the game if it is over
  describe('takeTurn', function() {
    var takeTurn = require('../game_logic/game_instance').takeTurn;
    var guess, player;
    
    beforeEach(function () {
      guess = function () { return [0,0] };  //stub function returns a valid coordinates
      player = {
        ships: [
          {
            locations: [[0,0]],
            damage: []
          }
        ]
      }
    });
      
    
    it('should return false if the game ends', function () {
      var actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });
  });
  
  function saveGame (callback) {
    setTimeout(function () {
      callback();
    }, 1000);
  }
  
  describe('saveGame', function () {
    it('should update save status', function (done) {
      var status = 'Game not saved...';
      
      saveGame(function () {
        status = 'Game saved!';    
        expect(status).to.equal('Game saved!');
        done();
      });
    });         
  });
  
});
  
  











