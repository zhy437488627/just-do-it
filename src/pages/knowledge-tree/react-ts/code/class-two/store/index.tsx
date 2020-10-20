import { createStore, applyMiddleware,StoreEnhancer, StoreEnhancerStoreCreator } from "redux";
import { thunk } from "redux-thunk";

const reducers = () => {}
// let store = createStore()
const StoreEnhancer: StoreEnhancer = applyMiddleware(thunk)
const StoreEnhancerStoreCreator: StoreEnhancerStoreCreator = StoreEnhancer(createStore);