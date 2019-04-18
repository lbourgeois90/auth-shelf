import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './ViewShelfItem.css';

class ViewShelfItem extends Component {

    render() {
        return (
            <div className="ViewShelfItem-card">
                <h2>{this.props.item.description}</h2>
                <img alt={this.props.item.description} src={this.props.item.image_url} className="ViewShelfItem-image" />
                <p>Owner: {this.props.item.username}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(ViewShelfItem));
