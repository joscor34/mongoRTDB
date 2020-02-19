const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const colors = require('colors')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hola')
})

server.listen(PORT, () => {
  console.log(`Tu servidor está corriendo en http://localhost:${PORT}`.rainbow)
})

io.on('connection', function(socket){
  //imprimiendo el id del cliente conectado 
  console.log(`client: ${socket.id}`)
  //recibiendo el numero aleatorio del cliente
  socket.on('client', (num) => {
    console.log(num)
  })
})