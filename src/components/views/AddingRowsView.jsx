import React from 'react';
import RepoCardView from './RepoCardView';
import './stylesheet.css';

/**
 * Component returning categorised movie rows
 * @param details 
 */
const AddingRowsView = ({ repos = [] }) => {
    return (
        <div className="repo-container">
            {repos.length > 0 ? repos.map((item, index) => {
                return (<RepoCardView data={item} />)
            }) : null}
        </div>
    )
}

export default AddingRowsView;