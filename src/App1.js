import React from "react";
import "./App.css";

function App1(props) {
    return (
        <div className="App">
            <header>
                <p>App1 {props.name.title}</p>
            </header>
        </div>
    );
}

export default App1;
