import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('127.0.0.1:6699');
function App() {
    useEffect(() => {
        socket.on('greeting', (res) => {
            alert(res);
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
