// Promise에 기반한 Thunk를 만들어주는 함수입니다.
/*
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return param => async dispatch => {
        dispatch({ type, param });
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload })
        } catch (error) {
            dispatch({ type: ERROR, payload: error, ERROR: true })
        }
    }
}
*/

import { call, put } from "redux-saga/effects";

// 프로미스를 기다렸다가 결과를 디스패치하는 사가
export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    try {
      // 재사용성을 위하여 promiseCreator 의 파라미터엔 action.payload 값을 넣도록 설정합니다.
      const payload = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload });
    } catch (e) {
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};

// 리듀서에서 사용 할 수 있는 여러 유틸 함수들입니다.
export const reducerUtils = {
    initial: (data = null) => ({
        loading: false,
        data,
        error: null
    }),
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    success: (payload) => ({
        loading: false,
        data: payload,
        error: null
    }),
    error: payload => ({
        loading: false,
        data: payload,
        error: true
    })
}

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.
export const handleAsyncActions = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        console.log(45, state);
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null)
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload)
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload)
                }
            default:
                return state;
        }
    }
}

// 특정 id를 처리하는 Thunk 생성함수(param === id)
/*
const defaultIdSelector = param => param
export const createPromiseThunkById = (type, promiseCreator, idSelector = defaultIdSelector) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return param => async dispatch => {
        const id = idSelector(param);
        dispatch({ type, meta: id });
        try {
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload, meta: id })
        } catch (error) {
            dispatch({ type: ERROR, payload: error, ERROR: true, meta: id })
        }
    }
}
*/

// 특정 id의 데이터를 조회하는 용도로 사용하는 사가
// API를 호출 할 때 파라미터는 action.payload를 넣고,
// id 값을 action.meta로 설정합니다.
export const createPromiseSagaById = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function* saga(action) {
    const id = action.meta;
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield put({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      yield put({ type: ERROR, error: e, meta: id });
    }
  };
};


// id 별로 처리 하는 유틸함수
export const handleAsyncActionsById = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    console.log(86, '@@@@@@@@', type, key, keepData)
    return (state, action) => {
        const id = action.meta
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(keepData ? state[key][id] &&state[key][id].data : null)
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload)
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload)
                    }                    
                }
            default:
                return state;
        }
    }
}