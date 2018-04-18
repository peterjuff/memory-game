import React, {Component} from "react";
import './design.css';

const Design = props => (
  <div className="fr">  
    <div className="container">
    
        <img className="design" src = {props.image} onClick={()=>props.clickImage(props.id)}/>
    </div>
    <span onClick={() => props.design(props.id)} className="remove">
      
    </span> 
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