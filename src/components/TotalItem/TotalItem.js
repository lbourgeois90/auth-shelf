import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class TotalItem extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_TOTAL_ITEM' });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Total Item Count</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.reduxState.totalItemReducer.map(item =>
                        <tr>
                            <td>{item.username}</td>
                            <td>{item.count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(TotalItem));
