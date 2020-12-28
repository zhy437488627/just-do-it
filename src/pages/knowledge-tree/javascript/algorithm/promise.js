import { FundFilled } from "@ant-design/icons";

const PANDING = 'panding';
const FUlFILED = 'fuliled';
const REJECTED = 'rejected';

class Promise {
    constructor(fn) {
        this.value = null
        this.reason = null
        this.state = PANDING
        this.onFulfiledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value) => {
            setTimeout(() => {
                if(this.state === 'panding') {
                    this.state = FUlFILED
                    this.value = value
                    this.onFulfiledCallbacks.map(cb => {
                        this.value = cb(this.value)
                    })
                }
            }, 2000);
        }
        const reject = (reason) => {
            setTimeout(() => {
                if(this.state === 'panding') {
                    this.state = REJECTED
                    this.value = reason
                    this.onRejectedCallbacks.map(cb => {
                        this.reason = cb(this.reason)
                    })
                }
            }, 2000);
        }
        try {
            fn(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }

    // then(onFulfilled, onRejected) {
    //     typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled);
    //     typeof onRejected === 'function' && this.onRejectedCallbacks.push(onRejected);
    //     // 返回this支持then 方法可以被同一个 promise 调用多次
    //     return this;
    //   }
    then(onFulfiled, onRejected) {

        typeof onFulfiled === 'function' && this.onFulfiledCallbacks.push(onFulfiled)

        typeof onRejected === 'function' && this.onRejectedCallbacks.push(onRejected)
        
        return this
    }
}