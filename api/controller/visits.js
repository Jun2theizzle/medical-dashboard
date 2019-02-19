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
                "visitDate": moment().toLocaleString(),
                "cost": 100
            }
        },
        {
            "firstName": "Andrew",
            "lastName": "Brew",
            "medicalVisit": {
                "reason": "stomach pain",
                "description": "something happend to my stomach",
                "visitDate": moment().subtract(4, 'days').toLocaleString(),
                "cost": 200
            }
        },
        {
            "firstName": "Phil",
            "lastName": "Drerry",
            "medicalVisit": {
                "reason": "wrist pain",
                "description": "something happend to my wrist",
                "visitDate": moment().subtract(4, 'months').toLocaleString(),
                "cost": 1222
            }
        },
        {
            "firstName": "Brad",
            "lastName": "Langston",
            "medicalVisit": {
                "reason": "back pain",
                "description": "something happend to my back",
                "visitDate": moment().subtract(4, 'week').toLocaleString(),
                "cost": 222
            }
        }
    ];

    res.json({
        vists: visits
    })
});


module.exports = router;