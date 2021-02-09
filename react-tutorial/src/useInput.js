import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.name]: action.value };
    case 'INPUT_RESET':
      return { ...action.initialState };
    default:
      throw Error('Unhandled error');
  }
}

function useInput(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: 'INPUT_CHANGE', name, value });
  }, []);
  const reset = useCallback(
    () => dispatch({ type: 'INPUT_RESET', initialState: initialState }),
    [initialState]
  );
  return [state, onChange, reset];
}

export default useInput;
