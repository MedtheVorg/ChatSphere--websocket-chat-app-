import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../../hooks/useSocket';
import { getRooms } from '../../utils/api';
import { Room } from '../../types/types';

export default function JoinForm() {
    const navigate = useNavigate();
    const { socket, setUsername, setRoom } = useSocket();
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]);

    function joinRoom(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        socket.emit('join_room', {
            username: formData.get('username'),
            roomId: formData.get('roomId'),
        });
        setUsername(formData.get('username') as string);
        const currentRoom = availableRooms.find(
            (room) => room._id === (formData.get('roomId') as string)
        );
        setRoom(currentRoom!);
        navigate('/chat', { replace: true });
    }

    useEffect(() => {
        // fetch rooms
        getRooms().then((data) => {
            setAvailableRooms(data);
        });
    }, []);
    return (
        <form
            onSubmit={joinRoom}
            className='flex flex-col gap-y-4 rounded-md bg-white p-8  font-semibold max-w-[90%] md:max-w-[60%]  w-full bg-opacity-80'
        >
            <h1 className='text-4xl text-center md:text-6xl'>ChatSphere </h1>
            <p className=' mb-6 mt-4 text-center md:text-xl'>
                select a room and start chatting!
            </p>

            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                id='username'
                className='p-2 border outline-transparent focus:outline-orange-500'
                placeholder='username...'
                required
            />
            <label
                htmlFor='room'
                className='mt-4'
            >
                Room
            </label>
            <select
                name='roomId'
                id='room'
                className='p-2 border outline-transparent focus:outline-orange-500'
                required
            >
                <option
                    disabled
                    selected
                    value={''}
                >
                    -- Select Room --
                </option>
                {availableRooms?.length > 0 &&
                    availableRooms.map((room) => (
                        <option
                            value={room._id}
                            key={room._id}
                        >
                            {room.name}
                        </option>
                    ))}
            </select>
            <button className='btn-primary mt-4'>Join Room</button>
        </form>
    );
}
