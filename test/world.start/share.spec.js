var request = require('request');
var http    = require('http');
var Browser = require('zombie');
var chai = require('chai');
var expect = chai.expect;
var browser = new Browser();
var server  = require('../../libs/server');

describe('Passing the share level:', function() {

    var testServer;

    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close();
    });

    it("has the #repository-link elements", function(done){
        browser.visit("http://localhost:7000", function(err) {
            browser.assert.element('#repository-link');

            done();
        });
    });

    it('should contain an text YoseTheGame', function(done){
        request("http://localhost:7000/share", function(error, response, body){
            expect(body).to.contain( 'YoseTheGame' );
            done();
        })
    })

});