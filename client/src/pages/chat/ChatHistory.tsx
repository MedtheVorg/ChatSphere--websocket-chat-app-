/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { ChatroomMessage } from '../../types/types';
import { useSocket } from '../../hooks/useSocket';
import { getMessagesByRoom } from '../../utils/api';
export default function ChatHistory() {
    const { socket, room } = useSocket();

    const [historyMessages, setHistoryMessages] = useState<ChatroomMessage[]>(
        []
    );
    const chatHistoryRef = useRef<HTMLDivElement | null>(null);
    const handleChatMessage = (data: ChatroomMessage) => {
        setHistoryMessages((prevMessages) => [...prevMessages, data]);
    };
    useEffect(() => {
        socket.on('chat_message', handleChatMessage);
        return () => {
            socket.off('chat_message', handleChatMessage);
        };
    }, []);
    useEffect(() => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop =
                chatHistoryRef.current.scrollHeight;
        }
    }, [historyMessages]);

    useEffect(() => {
        //fetch messages by room
        getMessagesByRoom(room._id).then(
            (
                data: {
                    _id: string;
                    content: string;
                    author: string;
                    timestamp: string;
                }[]
            ) => {
                const refactoredData: ChatroomMessage[] = data.map(
                    (message) => ({
                        username: message.author,
                        text: message.content,
                        time: message.timestamp,
                    })
                );
                setHistoryMessages((prevMessages) => [
                    ...refactoredData,
                    ...prevMessages,
                ]);
            }
        );
    }, []);
    return (
        <div
            className='p-4  h-[calc(100vh-138px)] overflow-y-auto'
            ref={chatHistoryRef}
        >
            {historyMessages.map(
                ({ username, text, time }: ChatroomMessage, idx) => (
                    <div
                        key={idx}
                        className='rounded-lg bg-white p-2 mb-4 w-[70%]'
                    >
                        <p className='font-semibold mb-2'>{username}</p>
                        <div className='flex items-center justify-between'>
                            <p>{text}</p>
                            <p>{time}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
