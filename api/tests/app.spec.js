const chai = require("chai");
const expect = chai.expect;
const request = require('supertest');
const sinon = require('sinon');

const app = require('../app');

describe("smoke test", function () {
    it("checks equality", function () {
        expect(true).to.be.true;
    });
});

describe("app tests", function() {
    it("should succeed with getting home endpoint", async function () { 
        const response = await request(app)
                            .get('/')
                            .set('Accept', 'application/json')
                            .expect(200);
                            
        expect(response.body.api).to.equal('v1');
        expect(response.body.name).to.equal('medical-api');

    });
    
    it("should fail with missing api-key", async function() {
        await request(app)
            .get('/api/visits')
            .expect(403);
    });

    it("should succeed with getting an api-key", async function() {
        const response = await request(app)
                        .post('/api/login')
                        .expect(200);
        expect(response.body['api-key']).to.equal('your api key')
    });

    it("should succeed with getting visits", async function () {
        const response = await request(app)
            .get('/api/visits')
            .set('api-key', 'your api key')
            .expect(200);
        // the api is hardcoded to return 4 visits, so we can assume if we get 4 back, the auth has worked
        // and we got all our visits back
        expect(response.body.visits.length).to.equal(4);
    });

    it("should mock the response from fakeDb", async function() {
        const fakeDb = require('../util/fakeDb');
        // have sinon mock the modules
        const fakeDbMock = sinon.mock(fakeDb);
        
        // we should expect the 'query' function be called with a specific parameter 
        fakeDbMock.expects('query').withArgs('some fake query').exactly(1).returns([{
            'one fake object': 'some value'
        }]);

        // we can also expect the function to have been NOT called with some parameter
        fakeDbMock.expects('query').withArgs('some OTHER fake query').never();

        // call the api
        const response = await request(app)
            .get('/api/visits')
            .set('api-key', 'your api key')
            .expect(200);
        
        // we have mocked the response from fakeDb to return only one object
        expect(response.body.visits.length).to.equal(1);
        
        // let's see if the mock response we set was actually returned
        const responseObject = response.body.visits[0];
        expect(responseObject['one fake object']).to.equals('some value');

        // verify the expectations we put on the mock
        fakeDbMock.verify();
    });
});
