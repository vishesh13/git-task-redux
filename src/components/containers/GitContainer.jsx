import React from 'react';
import LoginView from '../views/LoginView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gitActions from '../../actions/gitAction';

/**
 * Container class having rendered movie rows 
 * and action calls to fetch required data
 */
class GitContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCard: false,
        };
        this.handleDisplayRepos = this.handleDisplayRepos.bind(this);
    }

    componentDidMount() {
        const { gitActions } = this.props;
        gitActions.loadUsersList();
    }

    /**
     * handler method to make login request
     */
    handleDisplayRepos(event) {
        const itemId = event.currentTarget.getAttribute('itemId');
        if (event && event.currentTarget && itemId) {
            const { gitActions, list = [] } = this.props;
            const selectedRepos = list.filter((index) => index.id == itemId);
            this.setState({
                displayCard: this.state.displayCard ? false : true,
            });
            gitActions.loadRepos(selectedRepos[0].repos_url);
        }
    }


    render() {
        const { list = [], repos = [] } = this.props;
        //let content = isLoading ? <AddingRowsView details={details} /> : <LoginView handleLoginRequest={this.handleLoginRequest}/>;
        return (
            <LoginView handleDisplayRepos={this.handleDisplayRepos} list={list} repos={repos} displayCard={this.state.displayCard} />
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        isLoading: state.isLoading,
        repos: state.user.repos,
    }
};

const mapDispatchToProps = dispatch => ({
    gitActions: bindActionCreators(gitActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GitContainer);