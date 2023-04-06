const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){

    let today = new Date();
    let curentDay = today.getDay();
    let day = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let x = '';


    day.forEach((day, index)=>{
        if(index == new Date().getDay()){
            return x = day;
        }
    })
    res.render('list',{kindOfDay:x});
});

app.listen(3000, function(){
    console.log('server has started running on port 3000');
});