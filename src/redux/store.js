import { createStore } from "redux";
import CouterReducer from "./counter/reducer"

const store = createStore(CouterReducer);

export default store;