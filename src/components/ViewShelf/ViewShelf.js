import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ViewShelfItem from '../ViewShelfItem/ViewShelfItem';

class ViewShelf extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_ITEM' });
    }

    render() {
        return (
            <section className="ViewShelf-card-area">
                {this.props.reduxState.itemListReducer.map(item =>
                    <ViewShelfItem key={item.item_id} item={item} />
                )}
            </section>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(ViewShelf));
