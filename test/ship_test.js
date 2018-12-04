var expect = require('chai').expect;

describe('check for ship', function() {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given players coordinates', function() {
    player = {
      ships: [
        {
          Locations: [[0,0]]
        }
      ]
    };
    expect(checkForShip(player, [9,9])).to.be.false;
  });

});
