const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date');

const app = express();

let Items = [];
let day = '';

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', function(req,res){

let day = date.getDate();

    res.render('list', {kindOfDay:day, newItem: Items})
});


app.post('/', function(req,res){

    let newItem = req.body.addItem;

    if(newItem === ''){

        return false;
    }else{

    Items.push(newItem);
    }

    console.log(newItem);

    res.redirect('/');
})



app.listen(3000, function(){
    console.log('server has started running on port 3000');
});