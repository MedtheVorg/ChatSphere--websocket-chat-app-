import { Link } from 'react-router-dom';
import Container from './Container';

export default function WaitingRoom() {
    return (
        <Container>
            <div className='flex items-center flex-col'>
                <h1>Welcome ! </h1>
                <p>provide a name to join a room and start chatting</p>
                <input
                    type='text'
                    name='username'
                    id=''
                />
                <Link
                    to={'/chat'}
                    className='btn-primary'
                >
                    join!
                </Link>
            </div>
        </Container>
    );
}
