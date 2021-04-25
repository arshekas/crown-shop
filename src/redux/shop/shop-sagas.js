import { takeLatest, call, put, all } from 'redux-saga/effects'
import { convertCollecionsSnapshotToMap, firestore } from '../../firebase/firebase';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop-actions';
import shopActionTypes from './shop-constants'


export function* fetchCollectionsAsync() {

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollecionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error) {
        put(fetchCollectionsFailure(error.message))
    }   

}

export function* fetchCollectionsStart() {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}