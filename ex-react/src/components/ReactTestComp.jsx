import { useState } from 'react';

const ReactTestComp = (props) => {
	const {num} = props;
    const [plusNum, setPlusNum] = useState(0);
	const addNum = () => { 
		const newPlus = plusNum+num;
		setPlusNum(newPlus);
    }
	return (
		<div>
			<p>{plusNum}</p>
			<button
				onClick = {addNum}
			>
			+num
			</button>
			<hr />
		</div>
	)
}

export default ReactTestComp