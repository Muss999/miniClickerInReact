import React from "react";
import { addClick, removeClicks } from "../store/clickerSlice";
import { useDispatch } from "react-redux";
import "./style.css";
const ClickButton = () => {
    const dispatch = useDispatch();

    function addOneClick() {
        dispatch(addClick());
    }
    function removeOneClicks() {
        dispatch(removeClicks());
    }
    return (
        <>
            <button
                className="w-30 m-3 border-0 btnAdd btns"
                onClick={() => addOneClick()}
            >
                click
            </button>
            <button
                className="w-30 m-3 border-0 btnReset btns"
                onClick={() => removeOneClicks()}
            >
                Reset
            </button>
        </>
    );
};

export default ClickButton;
