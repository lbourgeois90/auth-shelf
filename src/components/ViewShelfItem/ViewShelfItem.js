import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './ViewShelfItem.css';

class ViewShelfItem extends Component {

    deleteItem = () => {
        this.props.dispatch({ type: 'DELETE_ITEM', payload: this.props.item.item_id });
    }

    render() {
        return (
            <div className="ViewShelfItem-card">
                <h2>{this.props.item.description}</h2>
                <img alt={this.props.item.description} src={this.props.item.image_url} className="ViewShelfItem-image" />
                <p className="">Owner: {this.props.item.username}</p>
                <button onClick={this.deleteItem} className="ViewShelfItem-button">Delete</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(ViewShelfItem));
