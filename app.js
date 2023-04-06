const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    let today = new Date();
    if (today.getDay() === 8 || today.getDay() === 0 ) {
        res.send('yay its the weekend!');
    }else{
        res.send('lame, its work, for anyone but me...')
    }
});

app.listen(3000, function(){
    console.log('server has started running on port 3000');
});