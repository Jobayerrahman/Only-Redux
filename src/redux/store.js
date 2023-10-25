import { createStore } from "redux";
import CountReducer from "./count/reducer";

const store = createStore(CountReducer);

export default store;