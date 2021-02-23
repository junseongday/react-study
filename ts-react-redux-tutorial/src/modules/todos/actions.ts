// 액션 타입 선언
export const ADD_TODO = 'todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text
  }
});
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});