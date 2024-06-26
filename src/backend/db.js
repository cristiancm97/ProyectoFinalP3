// server.js
const express = require('express')
const cors = require('cors')
const Club = require('./models/clubModel')
const dbconnect = require('./config')
const app = express();
const User = require('./models/userModel')

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

app.post("/registro/nuevouser", (req,res) => {
  const nuevoUser = req.body;
  console.log('me llego un post') 
  console.log(nuevoUser) 
  const datosUser = User.create(nuevoUser)
  res.send(datosUser)
})

/*app.post('/registro/nuevoclub', async (req, res) => {
  try {
    const newClub = await Club.create(req.body);
    res.status(201).json(newClub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});*/

app.get('/registro/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/registro/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/registro/clubs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const club = await Club.findById(id);

    if (!club) {
      return res.status(404).json({ message: 'Club no encontrado' });
    }

    res.json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/registro/clubs/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const deletedClub = await Club.findByIdAndDelete(id);
      if (!deletedClub) {
          return res.status(404).json({ message: 'Club no encontrado' });
      }
      res.json({ message: 'Club eliminado correctamente' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.listen(5000,() => {
    console.log("El servidor esta en el puerto 5000")
})

dbconnect();


