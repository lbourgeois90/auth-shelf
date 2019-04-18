import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ViewShelf extends Component {
  componentDidMount () {
    
  }

  render() {
    return (
        <div></div>
  )}
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(ViewShelf));
