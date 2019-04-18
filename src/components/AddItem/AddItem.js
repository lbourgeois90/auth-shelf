import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

class AddItem extends Component {
    
    state ={
        newItem:{
            description: '',
            image_url:'',
            user_id: this.props.reduxState.user.id,
        }
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
          this.setState({
            newItem:  {
              ...this.state.newItem,
              [propertyName]: event.target.value,
            }
          })
        }
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_ITEM', payload: this.state.newItem})
        this.setState({
            newItem:{
              description: '',
              image_url:'',
          },
        })
      }
    
      
  // Renders the entire app on the DOM
  render() {
    return (
    <section>
        <h2>Add New Items</h2>
        <form>
        <label>Item Description:</label>
        <input type="text" 
               value={this.state.newItem.description}
               onChange={this.handleChangeFor('description')} />
        <br />
        <label>Image URL:</label>
        <input type="text" 
               value={this.state.newItem.image_url}
               onChange={this.handleChangeFor('image_url')} />
        <button onClick={this.handleSubmit}>Add</button>
        </form>
    </section>
    )
  }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(AddItem);