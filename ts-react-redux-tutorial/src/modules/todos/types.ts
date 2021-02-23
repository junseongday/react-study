import * as actions from './actions';

// 액션 객체들에 대한 타입 준비
export type TodosAction = 
  | ReturnType<typeof actions.addTodo>
  | ReturnType<typeof actions.toggleTodo>
  | ReturnType<typeof actions.removeTodo>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

//  Todo 배열 타입
export type TodosState = Todo[];
