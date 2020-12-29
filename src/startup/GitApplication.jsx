import React from 'react';
import GitContainer from '../components/containers/GitContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/GitStore';

const store = configureStore();
/**
 * Netflix Application class rendering the container
 */
class GitApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GitContainer />
            </Provider>
        );
    }
}

export default GitApplication;