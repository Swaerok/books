/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import TodoItem from './todoItem'
import './tododay.scss'

export default function ToDoDay(props) {
	const [todoItem, useTodoItem] = useState([]);
	const [todoInput, useTodoInput] = useState('')
	const [idForKeys, useIdForKeys] = useState(0)
	const [frag, useFrag] = useState()

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

	useEffect(() => {
		if (!todoItem) {
			return
		}
		const res = todoItem.map((item) => {
			return <TodoItem data={item} key={item.id}/>
		})
		useFrag(res)
	}, [todoItem])
	return (
		<div className="tododay">
			<h4>{props.data.date}</h4>
			<h2 className="tododay-title">{props.data.input}</h2>
			<form onSubmit={setItem}>
				<input onChange={setTodoInput} value={todoInput}></input>
				<button type="submit">Add</button>
			</form>
			<div>
				{frag}
			</div>
		</div>
	)
}
