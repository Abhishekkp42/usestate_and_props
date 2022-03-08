import { useState } from "react";

export function Counter(props){
	const [counter, setCounter] = useState(10)

	const handleChange= (value) =>{
		setCounter(counter+value)
		console.log("Counter", counter)
	}

	return (
		<>
			<h2>Counter: 0</h2>
			<button onClick={()=> {
				handleChange(1)
			}}>+</button>
		</>
		
	)
}