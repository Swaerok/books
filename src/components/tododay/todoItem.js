/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styles from './todoItem.scss'

export const TodoItem = (props) => {
	return (
		<div className={styles.todoItem}>
			<p>{props.data.input}</p>
		</div>
	)
}
