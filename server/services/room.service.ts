import { Room } from '../models/RefOptionIsUndefinedError';

export function createRoom(name: string) {
    return Room.create({ name });
}

export function addMessageToRoom(roomId: string, message: any) {
    return Room.findByIdAndUpdate(
        { _id: roomId },
        {
            $push: {
                messages: message,
            },
        }
    ).exec();
}

export function getAllRooms() {
    return Room.find().exec();
}
