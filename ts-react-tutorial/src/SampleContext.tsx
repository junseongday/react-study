import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

type Action = 
    | {type: 'SET_COUNT', count: number}
    | {type: 'SET_TEXT', text: string}
    | {type: 'SET_COLOR', color: Color}
    | {type: 'TOGGLE_GOOD'};

type SampleDispatch = Dispatch<Action>
// Constext 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }                                    
        default: 
            throw new Error('Unhandled action')
    }
}

export default function SampleContext({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'orange',
        isGood: true
    })
    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 }); // count 를 넣지 않으면 에러발생
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'yellow' }); // orange 를 넣지 않으면 에러 발생
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });
  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}