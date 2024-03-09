import Members from './Members';
import ChatHistory from './ChatHistory';
import MessageForm from './MessageForm';
import { useSocket } from '../../hooks/useSocket';
import { Link } from 'react-router-dom';
export default function ChatRoomPage() {
    const { room, socket } = useSocket();
    const leaveRoom = () => {
        socket.emit('disconnect');
    };
    return (
        <div className='fixed-height  '>
            <div className=' bg-white p-2 flex items-center justify-between border-b-2'>
                <span className='font-bold text-2xl'>ChatSphere</span>
                <Link
                    to={'/'}
                    className='btn-primary'
                    onClick={leaveRoom}
                >
                    Leave Room
                </Link>
            </div>
            <div className='grid grid-cols-5 '>
                <div className='col-span-2 md:col-span-1 bg-white p-4 flex flex-col '>
                    <div className='mb-4'>
                        <p className='text-2xl font-bold'>Room</p>
                        <h1 className='text-2xl font-semibold ml-2'>
                            {room.name}
                        </h1>
                    </div>
                    <div className='grow flex flex-col '>
                        <Members />
                    </div>
                </div>
                <div className='col-span-3 md:col-span-4 bg-[#1B1B1F] flex flex-col bg-opacity-80'>
                    <div className='grow'>
                        <ChatHistory />
                    </div>
                    <MessageForm />
                </div>
            </div>
        </div>
    );
}
