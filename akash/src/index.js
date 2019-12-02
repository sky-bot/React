import react from "react"
import ReactDom from 'react-dom'

const HelloWorld = () => {
    return (<h1>Hello Innocent Boy</h1>)
}

ReactDom.render(<HelloWorld/>,document.getElementById("root"))