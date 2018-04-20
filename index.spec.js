const should = require('should');
const f = require('.');

describe('toFormat', function() {
    it('Should return function', function() {
        const format = f`Hello, ${String}!`;

        should(format).be.a.Function();
    });

    it('Should format string with function', function() {
        const format = f`Hello, ${String}!`;

        const result = format('World');

        should(result).be.a.String()
        .which.is.equal('Hello, World!');
    });

    it('Should format multiple values', function() {
        const format = f`Value of ${String} is around ${(n) => n.toFixed(4)}`;

        const result = format('Pi', 3.14159);

        should(result).be.a.String()
        .which.is.equal('Value of Pi is around 3.1416');
    });
});
