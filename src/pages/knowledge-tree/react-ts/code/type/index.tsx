import React, { ReactChild, ReactElement, ReactText, DOMAttributes DetailedReactHTMLElement } from 'react'


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

interface DOMElement<P, T> extends ReactElement {

}

interface DetailedReactHTMLElement<P, T> extends DOMElement<P, T> {

}

declare function createElement<P, T extends Element>(
    type: string,// 元素类型 字符串如： h1 span
    props: P | null,
    ...children: ReactNode[]): DetailedReactHTMLElement<P, T>

interface FunctionComponent<P = {}>{
    (props: P): ReactElement | null
}
interface FunctionComponentElement extends ReactElement {
    
}