import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

const netflixReducer = (state = initialState.usersListState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USERS_LIST_REQUEST:
            return { ...state, };

        case actionTypes.LOAD_USERS_LIST_SUCCEEDED:
            const { response = [] } = action;
            return {
                ...state,
                list: [...response],
            };

        case actionTypes.LOAD_USERS_LIST_FAILED:
            return {
                ...state,
                isLoading: false,
                isFailed: true,
            };

        case actionTypes.LOAD_REPOS_REQUEST:
            return {
                ...state,
                user: {
                    displayRepos: true,
                }
            };

        case actionTypes.LOAD_REPOS_SUCCEEDED:
            const { repos = [] } = action;
            return {
                ...state,
                user: {
                    repos: [...repos],
                }
            };

        case actionTypes.LOAD_REPOS_FAILED:
            return {
                ...state,
                user: {
                    displayRepos: false,
                }
            };

        default:
            return state;
    }
};

export default netflixReducer;