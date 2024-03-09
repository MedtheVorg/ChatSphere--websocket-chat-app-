import ChatRoomPage from './pages/chat/ChatRoomPage';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route
                    index
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/chat'
                    element={<ChatRoomPage />}
                />
            </Routes>
        </>
    );
}

export default App;
