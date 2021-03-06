import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getItemSaga(action) {
    console.log('in getItemSaga');
    try{
       const response = yield axios.get('/api/shelf');
       console.log(response)
        yield put({type: 'SET_ITEM', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Unable to get item. Try again later.`)
    }
}

function* getTotalItemSaga(action) {
    console.log('in getItemSaga');
    try{
       const response = yield axios.get('/api/shelf/count');
       console.log(response)
        yield put({type: 'SET_TOTALITEM', payload: response.data});
    }
    catch (error) {
        console.log('ERROR IN GET', error);
        alert(`Sorry! Unable to get total item. Try again later.`)
    }
}



function* getSaga() {
    yield takeLatest('GET_ITEM', getItemSaga);
    yield takeLatest('GET_TOTALITEM', getTotalItemSaga)
  }
  
  export default getSaga;