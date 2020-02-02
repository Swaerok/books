/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { TodoItem } from './todoItem'
import styles from './tododay.scss'

const uuidv4 = require('uuid/v4');

export const ToDoDay = (props) => {
	const [todoItem, setTodoItem] = useState([]);
	const [todoInput, setTodoInput] = useState('')

	const setItem = (e) => {
		e.preventDefault();
		if (!todoInput) {
			return
		}
		const result = todoItem.slice();
		result.push({
			input: todoInput,
		})

		setTodoInput('');
		setTodoItem(result);
	}

	return (
		<div className={styles.tododay}>
			<h4>{props.data.date}</h4>
			<h2 className={styles.tododay__title}>{props.data.input}</h2>
			<form onSubmit={setItem}>
				<input onChange={(e) => { setTodoInput(e.target.value) }} value={todoInput}></input>
				<button type="submit">Add</button>
			</form>
			<div>
				{todoItem && todoItem.map((item) => { return <TodoItem data={item} key={uuidv4} /> })}
			</div>
		</div>
	)
}
