import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/layout/users/UserItem';
import Users from './components/layout/users/Users';
import User from './components/layout/users/User';
import './App.css';
import axios from 'axios';
import Search from './components/layout/users/Search';
import Alert from './components/layout/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/layout/pages/About';

class App extends Component {
    // 3) *****We can make https request to github in componentDidMount.

    state = {
        users:[],
        loading: false,
        alert: null,
        user:{},
        repos:[]
    };

   // It will show all the users:

//   async componentDidMount() {
//       this.setState({loading:true});

//       const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//       this.setState({users: res.data, loading:false});
//   }

// 1) Intro to JSX and what are expressions & conditions in jsx.

    render() {                                            
        const name = "to React Learning";
        const loading = false;                                
        const showName = true;                               
        
        return (
            <div className="App">                               
                <h2>My First app</h2>
                {loading ? <h4>Loading...</h4> : <h2>Welcome {showName && name}</h2> }    {/* Conditional statement */}
            </div>
        );
    }  

// 2) Components, props and proptypes - Creating Navbar


    // Search Github Users:
    searchUsers = async text => {
        this.setState({loading:true});

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({users: res.data.items, loading:false});
    }

    // Get Single github user:
    getUser = async (username) => {
        this.setState({loading:true});

        const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({user: res.data, loading:false});
    };

    // Get user repos:
    getUserRepos = async (username) => {
        this.setState({loading:true});

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:ascending?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        this.setState({repos: res.data, loading:false});
    };

    //Clear Users:

    clearUsers = () => this.setState({users:[], loading:false});

    //Set Alert:

    setAlert = (msg, type) => {
        this.setState({alert:{msg, type}});

        setTimeout(() => {
            this.setState({alert: null})
            }, 5000)
    };

    render(){
        const {users, user, repos, loading} = this.state;

        return(
            <Router>
                <div className='App'>
                    <Navbar />
                    {/* <UserItem /> */}
                    <div className="container">
                        <Alert alert={this.state.alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search searchUsers = {this.searchUsers} 
                                    clearUsers={this.clearUsers} 
                                    showClear={users.length > 0 ? true:false}
                                    setAlert={this.setAlert}
                                    />
                                    <br />
                                    <Users loading={loading} users={users} />
                                </Fragment>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User {...props} getUser={this.getUser} 
                                user={user} 
                                loading={loading}
                                repos={repos}
                                getUserRepos={this.getUserRepos}
                                />
                            )}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;




//  Points to remember:
//  1) Line 9: It is written in JSX as it has className instead of class; which is used in HTML. 
//     This is the difference b/w JSX(Javscript Syntax Extension) & html.
//  2) Line 9; we can also use "React.Fragment" OR just "Fragment" instead of div to avoid 
//     <div className="App"> - extra div tag in console above h2 tag.
// 3)  <Navbar title="Github Finder" icon="fab fa-github"/> ;Here title and icon are props and it will 
//      overide the default props