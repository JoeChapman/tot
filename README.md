tot
===============

A tiny assertion counter for mocha and chai.

Use the global count function to register the number of expected assertions per test (it).
If the number of assertions run differs form the number expected, tot'll let you know.

the tech bit
===============
pass tot into chai.use like so

```javascript
 require('chai').use(require('tot'));
```

that command will stick count on the global object

use count to register the number of expected assertions in mocha

```javascript
    it('title', function () {
        count(2);

        ({}).should.be.ok;

    });
```

run your tests in the cli, if there's a discrepancy, the reporter will display the error indicating the number expected and the actual number of assertions executed.