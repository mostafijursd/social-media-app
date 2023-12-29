
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: JSON.parse(window ?.localStorage.getItem("theme")) ?? " light",

};
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        SetTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
        },
    },
})
export default themeSlice.reducer;
export function SetTheme(value) {
    return (dispatch) => {
        dispatch(themeSlice.actions.SetTheme(value));
    };
}