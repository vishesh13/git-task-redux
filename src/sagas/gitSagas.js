import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import gitServiceFactory from '../services/gitServiceFactory';
import * as requestUrls from '../helpers/utilities';

/**
 * Sagas to fetch User details
 */
function* fetcUsersList() {
    try {
        const list = yield call(gitServiceFactory.getUsersList, requestUrls.BASE_URL);
        let response = [];
        const res = yield all(list.map((user) => {
            return call(function* () {
                response.push(yield call(gitServiceFactory.getUsersList, `${requestUrls.BASE_URL}/${user.login}`));
            })
        }));
        yield put({ type: actionTypes.LOAD_USERS_LIST_SUCCEEDED, response });
    } catch (error) {
        yield put({ type: actionTypes.LOAD_USERS_LIST_FAILED, error });
    }
}

function* fetchRepos(action) {
    try {
        const repos = yield call(gitServiceFactory.getUserRepoDetails, action.data);
        yield put({ type: actionTypes.LOAD_REPOS_SUCCEEDED, repos });
    } catch (error) {
        yield put({ type: actionTypes.LOAD_REPOS_FAILED, error });
    }
}


export function* gitSagas() {
    yield takeLatest(actionTypes.LOAD_USERS_LIST_REQUEST, fetcUsersList);
    yield takeLatest(actionTypes.LOAD_REPOS_REQUEST, fetchRepos);
}