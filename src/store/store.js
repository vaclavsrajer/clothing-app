import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";
// import { loggerMiddleware } from "./middleware/logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "rout",
  storage: storage,
  blacklist: ["user"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// filter remove false if condition evaluates false and return empty array
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
