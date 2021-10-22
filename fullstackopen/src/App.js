import React,{useState} from 'react';

const App =() => {
const [counter,setCounter]=useState(0)

const increaseByOne= () =>setCounter(counter+1)
const reset= () =>setCounter(0)

 return(
<>
Counter={counter}
<br />
<button onClick={increaseByOne}>
  plus
</button>

<button onClick={reset}>
  zero
</button>
</>

)

}

export default App;