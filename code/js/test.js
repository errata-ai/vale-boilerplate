/* Testing Node.js with Markdata

Usage: ./node_modules/mocha/bin/mocha */

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should report the correct index', function() {
        var array = [2, 9, 9];
        array.indexOf(2);     // 0
        array.indexOf(7);     // -1
        array.indexOf(9, 2);  // 2
        array.indexOf(2, -1); // -1
        array.indexOf(2, -3); // 0

        assert.equal(array.indexOf(2), 0);
        assert.equal(array.indexOf(7), -1);
        assert.equal(array.indexOf(9, 2), 2);
        assert.equal(array.indexOf(2, -1), -1);
        assert.equal(array.indexOf(2, -3), 0);
    });
  });
});
