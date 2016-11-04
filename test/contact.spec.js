var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../libs/server');

describe('should include the a#contact-me-link', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('should include the a#contact-me-link', function(done) {
        request('http://localhost:7000/contact', function(error, response, body) {
            expect(body).to.contain('a#contact-me-link');
            done(); 
        });
    });
});