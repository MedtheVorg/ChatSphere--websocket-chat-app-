import { Socket, Server as SocketIoServer } from 'socket.io';
import http from 'http';
import { JoinRoomData, SentMessage } from '../types/types';
import { getUsersByRoom, removeUserFromRoom, userJoin } from './users';
import moment from 'moment';
import { createMessage } from '../services/message.service';
import { addMessageToRoom } from '../services/room.service';
import { createUser } from '../services/user.service';
import { formatMessage } from './messages';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export function socketIoEntryPoint(
    httpServer: http.Server<
        typeof http.IncomingMessage,
        typeof http.ServerResponse
    >
) {
    //socketIo server
    const io = new SocketIoServer(httpServer, { cors: { origin: '*' } });
    const chatSphereBot = 'ChatSphere Bot';

    io.on('connection', (socket) => {
        printEmittedEvent(socket);

        // add user to a room
        socket.on('join_room', async (data: JoinRoomData) => {
            const { username, roomId } = data; // data sent from the client
            console.log('🚀 ~ socket.on ~ data:', data);
            const roomUser = userJoin(socket.id, username, roomId);

            //save user to database
            const createdUser = await createUser(username, socket.id);
            socket.join(roomUser.roomId); // a room is an arbitrary channel that socket instances can join and leave

            // Welcome current user
            socket.emit(
                'chat_message',
                formatMessage(chatSphereBot, `Welcome to ChatSphere 🎉🤩`)
            );

            // Broadcast when a new user joins a room
            socket.broadcast
                .to(roomUser.roomId)
                .emit(
                    'chat_message',
                    formatMessage(
                        chatSphereBot,
                        `${roomUser.username} has joined the chat room`
                    )
                );

            //send room members
            io.to(roomUser.roomId).emit(
                'chatroom_users',
                getUsersByRoom(roomUser.roomId)
            );

            // listen to when a user sends a chat message
            socket.on('chatroom_message', async (message: SentMessage) => {
                // save message to database
                const time = moment().format('h:mm a');
                console.log(
                    '🚀 ~ socket.on ~ createdUser._id:',
                    createdUser._id
                );
                console.log(
                    '🚀 ~ socket.on ~ roomUser.roomId:',
                    roomUser.roomId
                );

                const createdMessage = await createMessage(
                    message.text,
                    roomUser.roomId,
                    createdUser._id.toString(),
                    time
                );
                await addMessageToRoom(roomUser.roomId, createdMessage);

                // emit the message back to the chat room
                io.to(roomUser.roomId).emit(
                    'chat_message',
                    formatMessage(message.username, message.text, time)
                );
            });

            // user disconnects
            socket.on('disconnect', (reason, details) => {
                console.log(`user disconnected`); // 400
                //remove user from the room
                removeUserFromRoom(roomUser.id);

                // send the users left in the room
                io.to(roomUser.roomId).emit(
                    'chatroom_users',
                    getUsersByRoom(roomUser.roomId)
                );

                // send a notification message
                io.to(roomUser.roomId).emit(
                    'chat_message',
                    formatMessage(
                        chatSphereBot,
                        `${roomUser.username} has left the room`
                    )
                );
            });
        });
    });
}

function printEmittedEvent(
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
    socket.onAny((eventName) => {
        console.log('🚀 ~ SocketContext ~ eventName:', eventName);
    });
}
