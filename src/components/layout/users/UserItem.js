// 1) Component state -

// import React, { Component } from 'react';

// class UserItem extends Component{
//     render(){
//         const {login, avatar_url, html_url} = this.props.user;

//         return(
//             <div className="text-center">
//                 <img src={avatar_url} alt="image" className="round-img" style={{width:'100px'}}/>
//                 <h3>{login}</h3>
//                 <div>
//                     <a href={html_url} target="_blank" className="btn btn-sm btn-dark my-1">More</a>
//                 </div>
//             </div>
//         );
//     }
// }

// export default UserItem;


// 2) Now converting Class based component to Fn based comp.

import React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';

// function UserItem(props){                                      
// Above line can also be writtten as below to avoid "const {login, avatar_url, html_url} = props.user;"":
function UserItem({user:{login, avatar_url, html_url}}){
    // const {login, avatar_url, html_url} = props.user;                  // 'this' is now not required in this line as we are not using class anymore

    return(
        <div className="text-center">
            <img src={avatar_url} alt="img" className="round-img" style={{width:'100px'}}/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">More</Link>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: Proptypes.object.isRequired
}

export default UserItem;