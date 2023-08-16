import { configureStore } from "@reduxjs/toolkit";
import clickReducer from "./clickerSlice";

export default configureStore({
    reducer: {
        clicks: clickReducer,
    },
});
