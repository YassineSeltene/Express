const express = require ('express');
const app = express ();



function time(req, res , next) {
    
    if (req.params.d < 1 || req.params.d > 5)
      res.send("L'application est seulement disponible du lundi au vendredi de 9h à 17h");
    else if (req.params.h < 9 || req.params.h > 17)
      res.send("L'application est seulement disponible du lundi au vendredi de 9h à 17h ");
     
    next()
  }

  app.use (time);

app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})

app.get('/', (req,res)=>{
    res.sendFile (__dirname + "/public/HomePage.html")
});

app.get('/OurServices/:d/:h', (req,res)=>{
    res.sendFile (__dirname + "/public/OurServices.html")
});

app.get('/ContactUs/:d/:h', (req,res)=>{
    res.sendFile (__dirname + "/public/ContactUs.html")
});



const port  = 5000;
app.listen (port, ()=>{
    console.log (`server running on port ${port}`);
});