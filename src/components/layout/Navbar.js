// Components, props and proptypes - 

// import React, { Component } from 'react';
// import Proptypes from 'prop-types';

// export class Navbar extends Component{
//     static defaultProps = {                         // If props are missing, then these are used.
//         title:"Github Finder",
//         icon:"fab fa-github"
//     };

//     static propTypes ={
//         title: Proptypes.string.isRequired,
//         icon: Proptypes.string.isRequired
//     };

//     render(){
//         return(
//             <nav className="navbar bg-primary">
//                 <h1>
//                     <i className={this.props.icon}></i> {this.props.title}
//                     {  /*<i className="fab fa-github"></i> Github Finder*/  }
//                 </h1>
//             </nav>
//         );
//     }
// }

// export default Navbar;


// 2) Now converting Class based component to Fn based comp.

import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

function Navbar({icon, title}){
    return(
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {                                 
    title:"Github finder",
    icon:"fab fa-github"
};

Navbar.propTypes ={
    title: Proptypes.string.isRequired,
    icon: Proptypes.string.isRequired
};

export default Navbar;