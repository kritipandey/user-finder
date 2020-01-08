import React, {Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text : ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something' , 'light');
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({text:''});
        }        
    };

    onChange = e => this.setState ({[e.target.name]: e.target.value});         // we set the State in class based component. 
    
    render() {
        const{showClear , clearUsers} = this.props;         // Took showClear & clearUsers from "this.props" 

        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type='text' 
                    name='text' 
                    placeholder='Search Users...' 
                    value={this.state.text} 
                    onChange = {this.onChange}
                    />
                    <button type='submit' value='Search' className='btn btn-block btn-dark'>Search</button>
                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>) }
            </div>
        )
    }
}

export default Search;