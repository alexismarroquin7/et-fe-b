import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import logger from "redux-logger";

import { authSlice, transactionSlice } from "./slices";

export * from "./slices";


const rootReducer = {
  auth: authSlice.reducer,
  transaction: transactionSlice.reducer
};

const createStore = () => {
  let middleware = [thunk];
  
  if(process.env.NODE_ENV === 'development'){
    middleware.push(
      logger
    );
  }

  let preloadedState = {};
  
  if(typeof window ==='undefined'){
    preloadedState = {};
  } else {
    const item = localStorage.getItem('et-fe-a-r-s');
    
    if(!item){
      localStorage.setItem('et-fe-a-r-s', JSON.stringify({}));
    }

    preloadedState = JSON.parse(localStorage.getItem('et-fe-a-r-s'));
  }
  
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState
  });
  
  store.subscribe(() => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('et-fe-a-r-s', JSON.stringify(store.getState()))
    }
  });
  
  return store;
}
export const store = createStore();