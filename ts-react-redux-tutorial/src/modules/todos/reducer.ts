import { TodosState, TodosAction } from './types';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
function reducer(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch(action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }

}
export default reducer;