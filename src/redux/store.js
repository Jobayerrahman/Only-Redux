import { createStore } from "redux";
import coutnerReducer from "./counter/reducer";

const store = createStore(coutnerReducer);

export default store;