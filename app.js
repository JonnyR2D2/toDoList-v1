const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let Items = [];
let day = '';

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.get('/', function(req,res){

    let today = new Date();
    let curentDay = today.getDay();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    let day = today.toLocaleDateString('en-US', options);
    res.render('list', {kindOfDay:day, newItem: Items})
});


app.post('/', function(req,res){

    let newItem = req.body.addItem;

    Items.push(newItem);

    console.log(newItem);

    res.redirect('/');
})



app.listen(3000, function(){
    console.log('server has started running on port 3000');
});