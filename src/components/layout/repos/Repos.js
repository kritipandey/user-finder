import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos =({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)

    // (repo => <ReposItem repo={repo} key={repo.id}/>); for each repo, where we pass individual repo in repo item.
    // Since it is a list we will use key.
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;