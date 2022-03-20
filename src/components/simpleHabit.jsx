import React, { useCallback, useEffect, useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);  // react Hook에서 state 설정해주기(useState api사용)
  // count: 실제 state값, setCount: count를 업데이트 할 수 있는 함수
  const spanRef = useRef();
  // createRef: 호출할 때마다 새로운 ref 만듬.
  // useRef: 한 번만 만들고 메모리에 저장해놓고 다시 그것을 재사용하는 react Hook api

  const handleIncrement = useCallback(() => {
    setCount( count + 1 );
  });
  // useCallback: 게속 반복해서 호출돼도 동일한 콜백함수 전달

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);
  // useEffect: componentDidMount와 update 합쳐진 함수. []안에 원하는 것만 지정해줄 수 있음.
  
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

export default SimpleHabit;