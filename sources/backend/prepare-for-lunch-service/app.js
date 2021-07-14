import express from 'express';
import testRouter from './routes/testRouter.js';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

//Middlewares

//Routes

//Catch errors

//Routes
app.use('/test', testRouter);

//Start server
const port = app.get('port') || 6969;
app.listen(port, () => console.log(`Server is listening on ${port} `));

//Socket
const portSocket = app.get('socketPort') || 6699,
    ipSocket = process.env.IP || '127.0.0.1',
    socketServer = http.createServer().listen(portSocket, ipSocket, function () {
        console.log('Socket.IO server started at %s:%s!', ipSocket, portSocket);
    });

const socketConfig = {
    cors: { origin: '*' },
};

const io = new Server(socketServer, socketConfig);

function run(socket) {
    console.log(socket.id);
    console.log('Socket run !');
    socket.emit('greeting', 'Hello from Socket.IO server');
}

io.sockets.on('connection', run);
