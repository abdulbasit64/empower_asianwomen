import React from 'react'

function Button(props) {
	return (
		<div className='rounded-full p-5 m-2 w-fit' style={{backgroundColor: props.bg}}>
			<p style={{fontFamily: 'Arial', color: props.color}}>{props.text}</p>
		</div>
	)
}

export default Button
