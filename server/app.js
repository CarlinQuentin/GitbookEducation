let express = require('express');
let app = express();
let test = require('./controllers/testcontroller')
let sequelize = require('./db')


sequelize.sync();

app.use('/test', test)

app.listen(3000, function(){
    console.log('Hey Man!!!')
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test/ endpoint. It's from the  server")
});

app.use('/test/about', test)


