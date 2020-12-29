import axios from 'axios';
import * as requestUrls from '../helpers/utilities';

/**
 * axios call to fetch users list
 */
const serviceFactory = () => ({
    getUsersList: requestUrl => axios.get(requestUrl, {
        'headers': {
            'Authorization': `token ${requestUrls.API_KEY}`
        }
    }).then(response => response.data),

    /**
     * Places an ajax call to get user details 
     */
    getUserRepoDetails: requestUrl => axios.get(requestUrl, {
        'headers': {
            'Authorization': `token ${requestUrls.API_KEY}`
        }
    }).then(response => response.data),
});

export default serviceFactory();