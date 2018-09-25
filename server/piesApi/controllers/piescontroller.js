let express = require('express');
let router = express.Router();

router.get('/', (req, res) => res.send('I love pie!'))
router.get('/taste', (req, res) => res.send('I love pie alot!'))

module.exports = router;