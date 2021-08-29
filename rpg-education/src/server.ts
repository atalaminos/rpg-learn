
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import { entryPoint, RpgWorld, Direction, Move } from '@rpgjs/server'
import modules from './modules' 
import { Education } from './education'

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    maxHttpBufferSize: 1e4
})
const rpgGame = entryPoint(modules, { io, basePath: __dirname })
rpgGame.app = app

app.use('/', express.static(__dirname + '/../client'))

/* */
const education = new Education();
education.startWebService(app);
/* */

server.listen(PORT, () => rpgGame.start());

education.startSelenium();
