import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItemSaga(action) {
    console.log('in deleteItemSaga');
    try{
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({type: 'GET_ITEM'});
    }
    catch (error) {
        console.log('ERROR IN DELETE', error);
        alert(`Sorry! Unable to delete item. Try again later.`)
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_ITEM', deleteItemSaga);
  }
  
  export default deleteSaga;
  