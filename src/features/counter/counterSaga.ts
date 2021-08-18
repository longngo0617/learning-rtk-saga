import { takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';

export function* log(action: PayloadAction) {
  yield console.log('Log', action);
}

export default function* counterSaga() {
  yield takeEvery('*', log);
}
