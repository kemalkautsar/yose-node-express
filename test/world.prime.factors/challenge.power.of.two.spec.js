var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../../libs/server');

describe('Passing the Prime Factors:', function() {

    var testServer;

    var port = process.env.PORT || 7000;
    var url = port == 7000 ? "http://localhost:7000/primeFactors?number=300" : "https://yose-kemalkautsar.herokuapp.com/primeFactors?number=300";

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it('returns the expected output', function(done) {
        request(url, function(error, response, body) {
            params = JSON.parse(body);
            if (isNaN(params.number)) {
                value = JSON.stringify({
                    "number" : params.number,
                    "error" : "not a number"
                });
            } else {
                value = JSON.stringify({
                    "number" : params.number,
                    "decomposition" : [2,2,3,5,5]
                });
            }
            expect(body).to.equal(value);
            done();
        });
    });

});
