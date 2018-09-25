let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
    res.send('Hey!!! this is a test route!')
});

router.get('/about', function(req, res){
    res.send('So, I can do this!')
});

router.get('/contact', function(req, res){
    res.send('!')
    console.log( {
        Name: 'Quentin',
        Age: 18
    })
});

router.get('/projects', function(req, res){
    res.send([
        'Project1', 'Project2'
    ]
    )
    

});

router.get('/myContacts', function(req, res){
    res.send([
        {user: 'Quentin', Age: '18'},
        {user: 'Sam', Age: '27'},
        {user: 'Jake', Age: '32'},
        {user: 'From', Age: '4'},
        {user: 'STATEFARM', Age: '60'}
    ])
});


module.exports = router;