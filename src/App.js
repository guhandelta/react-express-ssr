import { useState } from 'react'


function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);

  return (
    <>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;{count}</p>
      <button onClick={increment}>&emsp;&nbsp;+&emsp;&nbsp;</button>&emsp;&emsp;&emsp;
      <button onClick={decrement}>&emsp;&nbsp;-&emsp;&nbsp;</button>
    </>
  );
}

export default App;
