import * as actionTypes from './actionTypes';

/**
 * function to dispatch movie details loading request
 */
export function loadUsersList() {
    return {
        type: actionTypes.LOAD_USERS_LIST_REQUEST,
    };
}

/**
 * function to dispatch login request
 */
export function loadRepos(reposUrl) {
    return {
        type: actionTypes.LOAD_REPOS_REQUEST,
        data: reposUrl,
    };
}