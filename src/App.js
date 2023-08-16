import React from "react";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";

const App = () => {
    return (
        <div className="d-flex justify-content-center text-center flex-column align-items-center">
            <ClickCounter />
            <ClickButton />
        </div>
    );
};

export default App;
