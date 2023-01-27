const router = require('express').Router();
const fs = require('fs');

router.post('/from', (req, res) => {
    console.log(req.body, '------------');
    fs.writeFileSync('./WriteFiles/one.txt', req.body.text);
    res.end();
});
router.post('/to', (req, res) => {
    console.log(req.body, '------------');
    fs.writeFileSync('./WriteFiles/two.txt', req.body.text);
    res.end();
});

router.get('/from', (req, res) => {
    const dt = fs.readFileSync('./writeFiles/one.txt', 'utf8')
    res.json(dt)
})

module.exports = router;
