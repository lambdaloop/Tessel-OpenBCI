var tessel = require('tessel');
var BCILib = require('./');
var BCI = BCILib.use(tessel.port['A']);

BCI.reset.output(false);
BCI.reset.output(true);

BCI._reset(function () {
    console.log('reset')
    BCI._start(function () {
        console.log('started')
        BCI._rdatac(function () {
            BCI.spi.transfer(new Buffer([0x12, 0x00, 0x00, 0x00]), function(err, buf) {
                console.log(buf);
            })

            console.log('did something')

        });
    });
});
