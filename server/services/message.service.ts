import { Message } from '../models/RefOptionIsUndefinedError';

export function createMessage(
    content: string,
    room: string,
    author: string,
    timestamp: string
) {
    return Message.create({ content, author, timestamp, room });
}

export function getMessagesByRoom(roomId: string) {
    return Message.find({ room: roomId }).exec();
}
