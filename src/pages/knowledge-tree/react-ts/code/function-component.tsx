// eslint-disable-next-line max-classes-per-file
import React, { DetailedReactHTMLElement, FunctionComponent, FunctionComponentElement, ReactElement } from 'react'
import ReactDom from 'react-dom'

interface Props {
    className: string;
}
const props: Props = {
    className: 'title'
} 
interface State {
    id: string
}
// eslint-disable-next-line react/prefer-stateless-function
class Hello extends React.Component<Props, State> {
    // eslint-disable-next-line react/no-unused-state
    state = { id: 'aaa'}

    render() {
        return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
    }
}
// function Hello(props: Props) {
//     return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
// }
const element: ReactElement<Props> = (
    React.createElement<Props>(Hello, props)
)
ReactDom.render(element, document.getElementById('root'))

// 命名空间 A和A会合并
interface A {
name:string
}
interface A {
    name1:string
}
// 命名空间
namespace b1 {
    class C {

    }
}
namespace b2{
    class C {
        
    }
}