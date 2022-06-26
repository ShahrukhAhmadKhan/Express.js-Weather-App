const express = require("express");
const path =require("path");
const app = express();
port = 8000;
const staticPath = path.join(__dirname, "../public/");
app.use(express.static(staticPath));
app.set('view engine', 'hbs');

app.get("", (req, res)=>{

    res.render('index');
});

app.get("/about", (req, res)=>{

    res.render('about');
});

app.get("/weather", (req, res)=>{

    res.render('weather');
});

app.get("*", (req, res)=>{

    res.send("hello, this page is not avalible");
});

app.listen(port, ()=>{
    console.log(`port ${port} is working properly`);
});