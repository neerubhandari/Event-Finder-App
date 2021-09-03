import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "./reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { fetchData } from "./actions";
export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
  store.dispatch(fetchData());
export const persistor=persistStore(store);
  export default {store,persistor};