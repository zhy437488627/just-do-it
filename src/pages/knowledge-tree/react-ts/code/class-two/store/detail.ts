function createStore(reducer: any) {
    return { getState: 'getState', dispatch: 'dispatch'};
}
// store的增强器
function StoreEnhancer(createStore: any) {
    return function (...arg: any[]) {
        const store = createStore(...arg)
        store.func = 'fn'
        return store
    }
}
const newCreateStore = StoreEnhancer(createStore);

const newStore = newCreateStore(() => {});