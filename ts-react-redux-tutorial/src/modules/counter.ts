// 액션 타입을 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션생성 함수를 선언
export const increase = () => ({
    type: INCREASE
});
export const decrease = () => ({
    type: DECREASE
});
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
});

// 모든 액션 객체들에 대한 타입을 준비
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 상태 타입
type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

export default function counter( state: CounterState = initialState, action: CounterAction ) {
    switch(action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };                        
        default:
            return state
    }
}