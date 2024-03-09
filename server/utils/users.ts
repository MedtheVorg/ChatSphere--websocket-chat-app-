import { User } from '../types/types';

let users: User[] = []; // All users in current chat room

export function userJoin(id: string, username: string, roomId: string) {
    const user: User = { id, roomId, username };
    users.push(user);

    return user;
}

export function getUsers() {
    return users;
}
export function getUserById(id: string) {
    return users.filter((user) => user.id === id);
}

export function getUsersByRoom(roomId: string) {
    return users.filter((user) => user.roomId === roomId);
}

export function removeUserFromRoom(id: string) {
    users = [...users.filter((user) => user.id !== id)];
}
