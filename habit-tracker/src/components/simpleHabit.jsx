import React, { useCallback, useEffect, useState } from 'react';

const SimpleHabit = props => {
    // useState 사용 시 아래 state 정의 필요없음
    // state = {
    //     count: 0,
    // };
    const [count, setCount] = useState(0); // useState(초기값), count 정의(지역변수)

    const handleIncrement = useCallback(() => { // useCallback : 매번 새롭게 할당되는 것을 방지(React Basic(Habit Tracker)메모 참고)
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted && updated: ${count}`); // console.log가 mount될 때, update될 때 모두 출력되는 것을 알 수 있다. => componentDidMount, componentDidUpdate를 한번에 해줌
    }, [count]); 

    return (
        <li className='habit'>
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;