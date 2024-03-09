import { ReactNode, createContext, useContext, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { Room } from '../types/types';

const SERVER_URL =
    import.meta.env.VITE_ENV == 'dev'
        ? import.meta.env.VITE_DEV_URL
        : import.meta.env.VITE_PROD_URL;
export const socket = io(SERVER_URL as string);
type SocketContextType = {
    socket: Socket;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    room: Room;
    setRoom: React.Dispatch<React.SetStateAction<Room>>;
};
const ContextProvider = createContext<SocketContextType>(
    {} as SocketContextType
);
export function useSocket() {
    const context = useContext(ContextProvider);
    return context;
}
export default function SocketContext({ children }: { children: ReactNode }) {
    const [username, setUsername] = useState<string>('');
    const [room, setRoom] = useState<Room>({} as Room);

    return (
        <ContextProvider.Provider
            value={{ socket, username, setUsername, room, setRoom }}
        >
            {children}
        </ContextProvider.Provider>
    );
}
