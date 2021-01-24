import { combineReducers } from "redux";
import { activitiesReducer } from "./activitiesReducer";

export const rootReducer = combineReducers({
    activities: activitiesReducer,
})