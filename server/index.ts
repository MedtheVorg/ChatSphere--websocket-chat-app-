import express, { Request, Response } from 'express';
import http from 'http';
import cors from 'cors';

import { socketIoEntryPoint } from './utils/socketio';
import { getRooms } from './controllers/room.controller';
import { getMessages } from './controllers/message.controller';
import { connectToDb } from './utils/mongo';

//express app
const app = express();
app.use(cors({ origin: '*' }));

app.get('/', (req: Request, res: Response) => {
    res.redirect('/healthcheck');
});
app.get('/healthcheck', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

// Get Rooms
app.get('/rooms', getRooms);

// Get messages by room
app.get('/messages', getMessages);

// http instance used to handle  the initial Get Request
const httpServer = http.createServer(app);

//#region  must know
// socket.emit() ==> this will emit an event to the current client only
// socket.broadcast().emit() ==> this will emit an event to all the connected clients except the client emitting it
// io.emit() ==> this will emit an event to all the connected clients
//#endregion
socketIoEntryPoint(httpServer);

connectToDb().then(async (isConnected) => {
    httpServer.listen(8080, () => {
        console.log('Server is running on port 8080');
        console.log('http://localhost:8080');
    });

    // await Room.insertMany([
    //     { name: 'Web Development' },
    //     { name: 'System Design' },
    //     { name: 'Chill' },
    //     { name: 'Backend Development' },
    //     { name: 'Graphical Design' },
    // ]);
});

export default app;
