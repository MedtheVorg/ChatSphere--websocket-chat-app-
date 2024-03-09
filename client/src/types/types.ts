export type ChatroomMessage = {
    username: string;
    text: string;
    time: string;
};

export type SentMessage = {
    username: string;
    room: string;
    message: string;
    createdAt: string;
};

export type User = {
    id: string;
    username: string;
    room: string;
};

export type Room = {
    _id: string;
    name: string;
};
