'use strict';

var events = require('Mocha').Runner.prototype['__proto__'],
    counter = 0,
    expected;

function reset() {
    counter = 0;
    expected = void(0);
}

events.on('test end', function () {
    this._writableState = { ended: true };
    if (typeof expected === 'number' && counter < expected) {
        events.emit('error', new Error('Expected ' + expected + ', but only ' + counter + ' assertions were executed'));
    }
    reset();
});

module.exports = function (chai, utils) {

    utils.addMethod(global, 'count', function (n) {
        expected = n;
        return n;
    });

    utils.overwriteMethod(chai.Assertion.prototype, 'assert', function (_super) {
        return function () {
            counter++;
            _super.apply(this, arguments);
        };
    });

};