/** 
const assert = require('assert');
const requset = require('supertest');

const app = require('../app');

describe('The express app', () => {
    it('handles a GET requset to /api', (done) => {
        requset(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
});

*/





