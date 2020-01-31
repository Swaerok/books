/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { TodoItem } from './todoItem'
import styles from './tododay.scss'

export const ToDoDay = (props) => {
	const [todoItem, useTodoItem] = useState([]);
	const [todoInput, useTodoInput] = useState('')
	const [idForKeys, useIdForKeys] = useState(0)

	const setTodoInput = (e) => {
		const { value } = e.currentTarget;
		useTodoInput(value)
	}
	const setItem = (e) => {
		e.preventDefault();
		if (!todoInput) {
			return
		}
		const result = todoItem.slice();
		result.push({
			id: `${idForKeys} + 'item'`,
			input: todoInput,
		})

		useTodoInput('');
		useTodoItem(result);
		useIdForKeys(idForKeys + 1)
	}

	return (
		<div className={styles.tododay}>
			<h4>{props.data.date}</h4>
			<h2 className={styles.tododay__title}>{props.data.input}</h2>
			<form onSubmit={setItem}>
				<input onChange={setTodoInput} value={todoInput}></input>
				<button type="submit">Add</button>
			</form>
			<div>
				{todoItem && todoItem.map((item) => { return <TodoItem data={item} key={item.id}/> })}
			</div>
		</div>
	)
}
