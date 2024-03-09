export type JoinRoomData = {
    username: string;
    roomId: string;
};

export type User = JoinRoomData & {
    id: string;
};

export type SentMessage = {
    username: string;
    text: string;
};
