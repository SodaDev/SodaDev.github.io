import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import App from './App';
import "./index.css";

function renderButton(container: HTMLElement, visited?: boolean) {
    const element = (
        <App>
            <Button
                title="Click me mothafucka!"
                visited={visited}
                onClick={() => {
                renderButton(container, true);
      }}
            />
        </App>
    );
    ReactDOM.render(element, container);
}

(renderButton(document.getElementById('root')));
