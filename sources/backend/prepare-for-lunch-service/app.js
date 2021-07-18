import express from 'express';
import allDataLunch from './routes/testRouter.js';
import memberApi from './routes/memberRouter.js';
import orderApi from './routes/orderRouter.js';
import workApi from './routes/workRouter.js';
import http from 'http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
// import { validateString } from './utils/commonFunctions';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middlewares

//Routes

//Catch errors

//Routes
app.use('/data-lunch', allDataLunch);
app.use('/members', memberApi);
app.use('/orders', orderApi);
app.use('/works', workApi);

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
const managerUsers = [];

io.on('connection', function onConnect(socket) {
    console.log(socket.id + ' Connected !');

    socket.emit('greeting', 'Hello world');

    socket.on('add-member', function addMember(name) {
        var isValidate = validateString(name);
        if (isValidate) {
            socket.userName = name.trim();
            managerUsers.push(name.trim());
            console.log('Số người kết nối: ' + managerUsers);
            io.sockets.emit('add-member-success', [...managerUsers]);
        } else {
            socket.emit('add-member-fail', name);
        }
    });

    socket.on('disconnect', function onDisconnect() {
        var indexUser = managerUsers.findIndex((name) => name === socket.userName);
        managerUsers.splice(indexUser, 1);
        console.log(managerUsers);
        socket.broadcast.emit('member-disconnected', [...managerUsers]);
        console.log(socket.userName + ' Disconnected !');
    });
});

const validateString = (data) => {
    if (data === null) {
        return false;
    }
    if (data === undefined) {
        return false;
    }
    if (data.trim().length === 0) {
        return false;
    }
    return true;
};
