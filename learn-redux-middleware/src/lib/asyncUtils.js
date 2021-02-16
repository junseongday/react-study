// Promise에 기반한 Thunk를 만들어주는 함수입니다.
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
    error: error => ({
        loading: false,
        data: error,
        error: true
    })
}

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
// type 은 액션의 타입, key 는 상태의 key (예: posts, post) 입니다.
export const handleAsyncActions = (type, key) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    posts: reducerUtils.loading()
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