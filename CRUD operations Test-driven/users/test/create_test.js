const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const engin = new User({ name: 'Engin' });

        engin.save()
            .then( () => {
                //Has Engin been saved succesfully?
                assert(!engin.isNew);
                done();
            });

    });
});

