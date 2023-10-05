import React, {useState, useEffect, useRef} from "react";

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(0)
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name])

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} value={name} name={name} onChange={(e) => setName(e.target.value)}/>
      <p>My name is {name}</p>
      <p>I am rendered {renderCount.current} times</p>
      <button onClick={handleClick}>Click to Focus the Input Field</button>
    </div>
  );
}

export default App;
