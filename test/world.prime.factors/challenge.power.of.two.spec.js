var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../../libs/server');

describe('Passing the Power of Two level:', function() {

    var testServer;

    var port = process.env.PORT || 7000;
    var url = port == 7000 ? "http://localhost:7000/primeFactors?number=12" : "https://yose-kemalkautsar.herokuapp.com/primeFactors?number=12";

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    /*
    it('returns the expected output', function(done) {
        request(url, function(error, response, body) {
            number = JSON.parse(body).number;
            factors = [];
            for (i=1;i<=number;i++){
                number % 2 > 0 ? factors.push(2) : factors.push(1);
        		number = number/2;
            }
            expect(body).to.equal(
                JSON.stringify({
                    "number" : 12,
                    "decomposition" : [2,2,2,2]
                })
            );

            done();
        });
    });
    */
});
