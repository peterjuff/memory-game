import React, {Component} from "react";
import './design.css';

const Design = props => (
    <div className="container">
    <div>
        <img className="design" src = {props.image} onClick={()=>props.clickImage(props.id)}/>
    </div>
    </div>
)





// class Design extends Component {
//     render() {
//         return (
//             <div className = "design">Hello</div>
//         )
//     }
// }
export default Design;