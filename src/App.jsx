import './App.css'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  // 이걸 destructuring이라고함.

  return (
    <div>
      <h1>총합: {count1 + count2}</h1>
      <Counter
        count={count1}
        onIncrement={() => setCount1(prev => prev +1)
        }
      />
      <Counter
        count={count2}
        onIncrement={() => setCount2(prev => prev +1)
        }
      />
    </div>
  )
  {/* 일단 중괄호는 jsx에서 자바스크립트를 쓰겠다는 의미
        중괄호에 있는 count는 State에 있는 count
        <Counter>를 실행할 때 count라는 props를 넘겨줌
        Counter 컴포넌트에서 props로 받아서 사용
        근데 이러면 Counter 컴포넌트에서 setCount를 못씀
        그래서 onIncrement={}를 써서
        App에서 setCount를 쓸 수 있도록 정의를 해준다 */}
      {/* <Counter/> */}
}

function Counter({count, onIncrement}) {
  // 얘도 props를 넘겨주게되는데, 이걸 없애고
  // props를 빼고 따로따로 count, onIncrement를 받게 할 수 있음
  // 이러면 아래에서 props를 안써도됨
  // => 실제로 destructuring이라고 

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={() => onIncrement()}>
          증가
          {/* 이제 이 컴포넌트는 알아서 처리하는게 아니라
          props로 받은것에 대해서만 처리 */}
      </button>
    </div>
  )
}

export default App