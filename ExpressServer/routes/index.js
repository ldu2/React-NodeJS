const unknown = 'unknown';

const addresses = [
    {
        firstName: unknown,
        lastName: unknown,
        address: unknown,
        city: unknown,
        state: unknown,
        zip: unknown,
        phone: unknown,
    website: unknown,
    email: unknown,
    contact: unknown
    },
    {
        firstName: 'Patty',
        lastName: 'Murray',
        address: '154 Russell Senate Office Building',
        city: 'Washington',
        state: 'D.C.',
        zip: '20510',
        phone: '(202) 224-2621',
                    website: 'https://www.murray.senate.gov/public',
                    email: '',
                    contact: 'http://www.murray.senate.gov/public/index.cfm/contactme'
    },
    {
        firstName: 'Jonathan',
        lastName: 'Goldsmith',
        address: '101 Interesting St',
        city: 'Manchester',
        state: 'Vermont',
        zip: '05031',
        phone: '(263) 744-8611',
                    website: 'https://www.johnGoldSmith.com/public',
                    email: '',
                    contact: 'http://www.johnGoldSmith.com/public/index.cfm/contactme'
    },

    {
        firstName: 'Donald',
        lastName: 'Trump',
        address: '1600 Pennsylvania Ave',
        city: 'Washington',
        state: 'D.C.',
        zip: '20500',
        phone: '(202) 456-1111',
                    website: 'https://www.dt.com/public',
                    email: '',
                    contact: 'http://www.dt.com/public/index.cfm/contactme'
    },
    {
        firstName: 'Tom',
        lastName: 'Cruise',
        address: ' 9107 Wilshire Blvd',
        city: 'Beverly Hills',
        state: 'California',
        zip: '90210',
        phone: '(310) 736-1317',
                    website: 'https://www.tc.com/public',
                    email: '',
                    contact: 'http://www.tc.com/public/index.cfm/contactme'
    }
];

var express = require('express');
var router = express.Router();

router.get('/get-address-list', function(request, response) {
    'use strict';
    console.log('get addresses called');
    response.send(
        addresses
    );
});

module.exports = router;
