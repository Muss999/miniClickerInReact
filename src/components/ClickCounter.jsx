import React, { useState } from "react";
import { useSelector } from "react-redux";

const ClickCounter = () => {
    const clicks = useSelector((state) => state.clicks.clicks);

    return (
        <>
            <h1 className="m-5">{clicks}</h1>
        </>
    );
};

export default ClickCounter;
