import React from 'react';
import './App.css';

function App2(props) {
    return (
        <div className="App">
            <header>
                <p>
                    App2 {props.name}
                </p>
            </header>
        </div>
    );
}

export default App2;
