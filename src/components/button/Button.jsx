import React from 'react'

function Button(props) {
	return (
		<div className='rounded-full px-5 py-3 m-2 w-fit' style={{backgroundColor: props.bg}}>
			<p className='text-xs' style={{fontFamily: 'Arial', color: props.color}}>{props.text}</p>
		</div>
	)
}

export default Button
