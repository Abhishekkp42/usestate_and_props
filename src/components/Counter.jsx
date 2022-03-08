import { useState } from "react";

export function Counter(props){
	const [counter, setCounter] = useState(10)

	const handleChange= (value) =>{
		setCounter(counter+value)
	}

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={()=> {
				handleChange(1)
			}}>+</button>

			<button onClick={()=> {
				handleChange(-1)
			}}>-</button>

			<button onClick={()=> {
				setCounter(counter*2)
			}}>Double</button>

		</div>
		
	)
}