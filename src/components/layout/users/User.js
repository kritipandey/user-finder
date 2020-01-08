import React, {Fragment, Component } from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

export class User extends Component{
static propTypes = {
    user: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    getUserRepos: PropTypes.array.isRequired,
    repos: PropTypes.array.isRequired
}

componentDidMount () {
    this.props.getUser( this.props.match.params.login);
    this.props.getUserRepos( this.props.match.params.login);
}
    render(){
        const {
            login,
            avatar_url,            
            url,
            html_url,
            gists_url,            
            repos_url,
            name,
            company,
            blog,
            location,            
            hireable,
            bio,
            public_repos,
            public_gists,
            followers,
            following
        } = this.props.user;

        const {loading, repos} = this.props;

        if(loading) return <Spinner />

        return(
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="Profile image" className="round-img" style={{width: '150px'}}/>
                        <h2>{name}</h2>
                        <p>Location: {location}</p>
                    </div>
                    <div>                        
                        {login && <Fragment>
                        <p><b>Username:</b> {login}</p>
                        </Fragment>}
                        {company && <Fragment>
                        <p><b>Company:</b> {company}</p>
                        </Fragment>}
                        {blog && <Fragment>
                        <p><b>Website:</b> {blog}</p>
                        </Fragment>}
                        <br/>
                        {bio && <Fragment>
                            <p style={{fontWeight:'bold'}}>Bio:</p>
                            <p>{bio}</p>
                        </Fragment>}
                        <br/>
                        <a href={html_url} className="btn btn-dark" style={{borderRadius: 50}}>Visit Github Profile</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        );
    }
}

export default User;