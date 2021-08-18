import { all } from '@redux-saga/core/effects';
import counterSaga from '../features/counter/counterSaga';

function* helloSaga() {
  yield console.log('root');
}

function* rootSaga() {
  yield all([helloSaga(), counterSaga()]);
}

export default rootSaga;
