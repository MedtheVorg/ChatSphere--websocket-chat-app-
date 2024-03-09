import { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { User } from '../../types/types';
import Avatar from 'react-avatar';
export default function Members() {
    const { socket } = useSocket();
    const [members, setMembers] = useState<User[]>([]);

    useEffect(() => {
        socket.on('chatroom_users', (users: User[]) => {
            setMembers(users);
        });

        return () => {
            socket.off('chatroom_users', (users: User[]) => {
                console.log('🚀 ~ socket.on ~ users:', users);
                setMembers(users);
            });
        };
    }, [socket]);

    return (
        <div className='grow mt-8'>
            <h2 className='text-2xl font-bold'>Members</h2>
            <ul className='flex gap-y-5 py-2 mt-4 flex-wrap'>
                {members.map(({ id, username }) => (
                    <li
                        key={id}
                        className='flex items-center '
                        title={username}
                    >
                        <Avatar
                            name={username}
                            size='50'
                            round
                            className='h-10 w-10 justify-start mr-6 cursor-pointer transition-all duration-500 hover:scale-105'
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
