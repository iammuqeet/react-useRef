import React, {useState, useEffect, useRef} from "react";

function App() {
  const [name, setName] = useState('')
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1;
  }, [name])

  return (
    <div>
      <input value={name} name={name} onChange={(e) => setName(e.target.value)}/>
      <p>My name is {name}</p>
      <p>I am rendered {count.current} times</p>
    </div>
  );
}

export default App;
