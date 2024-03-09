import { FormEvent } from 'react';
import { Send } from 'lucide-react';
import { useSocket } from '../../hooks/useSocket';

export default function MessageForm() {
    const { socket, username } = useSocket();

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const text = formData.get('message');
        socket.emit('chatroom_message', {
            username,
            text,
        });
        (e.target as HTMLFormElement).reset();
    };
    return (
        <form
            className='bg-[#131719] w-full'
            onSubmit={sendMessage}
        >
            <div className='p-4 flex gap-x-4 items-center justify-between'>
                <input
                    type='text'
                    name='message'
                    className='text-white focus:outline-none grow rounded-md bg-transparent border-white border-2 border-opacity-10 p-2'
                    placeholder='write a message...'
                    required
                />
                <button className='transition-all duration-500 group border-2 rounded-full '>
                    <Send className='text-white     p-2 h-10 w-10 group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-all duration-500' />
                </button>
            </div>
        </form>
    );
}
