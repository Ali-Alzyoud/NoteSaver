const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const cors = require('cors');

dotenv.config({path : __dirname +'/.env'});


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(session({
    secret: "KAKSDOIJMAKWI#$(%EKF",
    resave: true,
    saveUninitialized: true,
    cookie: {
        //secure: true,
        httpOnly: false,
        maxAge: 60*60*1000,
    }
}));


const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.evwm2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected to DB");
    app.use('/api/users', require('./api/routes/users'));
}).catch((err)=>{
    console.log(err);
})



app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, ()=>{
    console.log('connected')
});