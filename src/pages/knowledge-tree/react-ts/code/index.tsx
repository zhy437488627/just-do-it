import React, { ReactChild, ReactElement, ReactText, DOMAttributes DetailedReactHTMLElement } from 'react'
import ReactDOM from 'react-dom'

interface Props {
    className: string
}

type ReactText = string | number 

interface ReactElement<P = any, T extends string = string> {
    type: T,
    props: P,
    key: string | null
}
type ReactChild = ReactElement|ReactText
type ReactNode = ReactChild | boolean | null | undefined
interface DOMElement<P,T> extends ReactElement {

}
// interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {

// }
// element指原生dom对象
function createElement<P extends DOMAttributes<T>, T extends Element>(
    type: string, // 元素类型 字符串如： h1 span
    props?: ClassAttributes<T> & P | null,
    ...children: ReactNode[]): DOMElement<P, T>;
const props: Props = {
    className: 'title'
} 
const element: DetailedReactHTMLElement<Props, HTMLHeadingElement> = React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
ReactDOM.render(element, document.getElementById('root'))

// 如何定义函数组件
function Hello(props: Props) {
    return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
}
let element2: DetailedReactHTMLElement<Props, HTMLHeadingElement> = (
    React.createElement<Props, HTMLHeadingElement>(Hello, props, 'hello')
)
ReactDOM.render(element2, document.getElementById('root'))