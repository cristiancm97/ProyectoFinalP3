const express = require('express')
const cors = require('cors')
const Busqueda = require('./userModel')
const dbconnect = require('./config')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json({type:"*/*"}))
app.use(cors())

app.post("/registro/nuevoclub", (req,res) => {
   const club = req.body;
   console.log('me llego un post') 
   console.log(club) 
   const datosClub = Busqueda.create(club)
   res.send(datosClub)
})

app.listen(3001,() => {
    console.log("El servidor esta en el puerto 3001")
})

dbconnect();


