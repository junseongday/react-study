import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수입니다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  counter: 0,
  text: '',
  list: []
};

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의: camelCase
function increase() {
    return {
        type: INCREASE
    }
}
// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
// 이렇게 쓰는 것을 추천합니다.
const decrease = () => ({
    type: DECREASE
  });
  
  const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
  });
  
  const addToList = item => ({
    type: ADD_TO_LIST,
    item
  });

  function reducer(state=initialState, action) {
      switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter++
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter--
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }

        default:
            return state;
      }
  }

//   스토어 만들기
const store = createStore(reducer);
console.log(71,store.getState());

// 스토어 안에 드렁있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}
const unsubscribe = store.subscribe(listener);

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));