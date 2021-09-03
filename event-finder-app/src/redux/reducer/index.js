import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import { loginReducer } from "./auth";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig={
  key:'root',
  storage,
  whitelist:['loginReducer']
}

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  loginReducer:loginReducer
});

export default persistReducer(persistConfig,rootReducer);
