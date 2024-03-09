import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SocketContext from './hooks/useSocket.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Router>
        <SocketContext>
            <App />
        </SocketContext>
    </Router>
    // </React.StrictMode>
);
