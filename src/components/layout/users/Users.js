// List of users and passing state with props -

import React from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) =>{
    // state = {                                               // state is just an object.
    //     userList: [
    //         {
    //             id: '1',
    //             login: 'mojombo',
    //             avatar_url: 'https://avatars2.githubusercontent.com/u/1?s=460&v=4',
    //             html_url: 'https://github.com/mojombo'
    //         },
    //         {
    //             id: '2',
    //             login: 'amarlearning',
    //             avatar_url: 'https://avatars0.githubusercontent.com/u/9383897?s=460&v=4',
    //             html_url: 'https://github.com/amarlearning/'
    //         },
    //         {
    //             id: '3',
    //             login: 'octocat',
    //             avatar_url: 'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
    //             html_url: 'https://github.com/octocat'
    //         },
    //         {
    //             id: '4',
    //             login: 'bradtraversy',
    //             avatar_url: 'https://avatars0.githubusercontent.com/u/5550850?s=460&v=4',
    //             html_url: 'https://github.com/bradtraversy'
    //         },
    //         {                                               
    //             id: '5',
    //             login: 'kritipandey',
    //             avatar_url: 'https://avatars0.githubusercontent.com/u/29279472?s=460&v=4',
    //             html_url: 'https://github.com/kritipandey'
    //         }
    //     ]
    // }
    if (loading) {
       return <Spinner />
    }
    else {
        return(
            <div style={userStyle}>                             
                {users.map(user => (               // map() loops every user. Output for each user
                    // <div key={user.id}>{user.login}</div>
                    <UserItem key={user.id} user={user}/>        // user={user} , here first user is prop and other user is user called as above.
                ))}
            </div>
        );
    }
}   

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
                            
const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
}

export default Users;