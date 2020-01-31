/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import './todoItem.scss'

export default function TodoItem(props) {
	return (
		<div className='todoItem'>
			<p>{props.data.input}</p>
		</div>
	)
}
