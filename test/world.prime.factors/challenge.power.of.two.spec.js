var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../../libs/server');

describe('Passing the Prime Factors:', function() {

    var testServer;

    var port = process.env.PORT || 7000;
    var url = port == 7000 ? "http://localhost:7000/primeFactors?number=12" : "https://yose-kemalkautsar.herokuapp.com/primeFactors?number=12";

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('returns the expected output', function(done) {
        request(url, function(error, response, body) {
            params = JSON.parse(body);
            // params_number = JSON.parse(body).number;
            // console.log(params_number);
            // factors = [2];
            // while (params.number > 2 ) {
            //     var number = params.number;
            //     number % 2 >= 0 ? factors.push(2) : factors.push(1);
            //     number = params.number/2;
            // }
            if (isNaN(params.number)) {
                value = JSON.stringify({
                    "number" : params.number,
                    "error" : "not a number"
                });
            } else {
                value = JSON.stringify({
                    "number" : params.number,
                    "decomposition" : [2,2,2,2]
                });
            }
            expect(body).to.equal(value);
            done();
        });
    });

});
