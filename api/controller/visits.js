const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/', (req, res) => {
    const visits = [{
            "firstName": "Phil",
            "lastName": "Langston",
            "medicalVisit": {
                "reason": "back pain",
                "description": "something happend to my back",
                "visitDate": moment().format('YYYY-MM-DD'),
                "cost": 100,
                "paid": true
            }
        },
        {
            "firstName": "Andrew",
            "lastName": "Brew",
            "medicalVisit": {
                "reason": "stomach pain",
                "description": "something happend to my stomach",
                "visitDate": moment().subtract(4, 'days').format('YYYY-MM-DD'),
                "cost": 200,
                "paid": true
            }
        },
        {
            "firstName": "Phil",
            "lastName": "Drerry",
            "medicalVisit": {
                "reason": "wrist pain",
                "description": "something happend to my wrist",
                "visitDate": moment().subtract(4, 'months').format('YYYY-MM-DD'),
                "cost": 122,
                "paid": false
            }
        },
        {
            "firstName": "Brad",
            "lastName": "Langston",
            "medicalVisit": {
                "reason": "back pain",
                "description": "something happend to my back",
                "visitDate": moment().subtract(4, 'week').format('YYYY-MM-DD'),
                "cost": 222,
                "paid": false
            }
        }
    ];

    res.json({
        visits: visits
    })
});


module.exports = router;