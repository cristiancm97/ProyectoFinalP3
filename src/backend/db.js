// server.js
const express = require('express')
const cors = require('cors')
const Club = require('./models/clubModel')
const dbconnect = require('./config')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json({type:"*/*"}))
app.use(cors())


app.post("/registro/nuevoclub", (req,res) => {
  const nuevoclub = req.body;
  console.log('me llego un post') 
  console.log(nuevoclub) 
  const datosClub = Club.create(nuevoclub)
  res.send(datosClub)
})

/*app.post('/registro/nuevoclub', async (req, res) => {
  try {
    const newClub = await Club.create(req.body);
    res.status(201).json(newClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

/*app.get('/registro/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

app.listen(5000,() => {
    console.log("El servidor esta en el puerto 5000")
})

dbconnect();


