module.exports = (req, res, next) => {
    console.log(req.headers);

    if(!req.headers['api-key']) {
        res.status(403).send('No "api-key" header present');
    }
    else {
        if (req.headers['api-key'] !== 'your api key'){
            res.status(403).send('Incorrect api-key');
        }
    }
    next();
}