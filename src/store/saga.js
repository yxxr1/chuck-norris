import {call, put, takeEvery} from 'redux-saga/effects'
import fetchItem from "../api/fetchItem";
import {addItem} from "./actions";

function* getItem(){
    try {
        const item = yield call(fetchItem);
        yield put(addItem(item));
    } catch (e){
        //
    }
}

export default function* (){
    yield takeEvery('FETCH_ITEM_REQUEST', getItem);
}