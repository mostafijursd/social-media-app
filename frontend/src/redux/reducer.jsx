import { combineReducers } from "@reduxjs/toolkit";
import userSlice from './postSlice';
import themeSlice from './themeSlice'
import postSlice from './postSlice'



const rootReducer = combineReducers({
    user: userSlice,
    theme: themeSlice,
    post: postSlice,
});
export { rootReducer }