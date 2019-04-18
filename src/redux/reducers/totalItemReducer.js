const totalItemReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_TOTALITEM':
        return action.payload;
      default:
        return state;
    }
  };

export default totalItemReducer;
