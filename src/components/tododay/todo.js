/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { ToDoDay } from './tododay'
import styles from './todo.scss'

export const Todo = () => {
	const [todoDays, useTodoDays] = useState([]);
	const [todoInput, useTodoInput] = useState('')
	const [idForKeys, useIdForKeys] = useState(0)
	const [error, useError] = useState('')

	const setDay = (e) => {
		e.preventDefault();

		const res = todoInput.split('.');
		const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
		if (res.length !== 3 || !todoInput) {
			useError('Invalid Date')
			return
		}

		res[2] = res[2].length === 2 ? `20${res[2]}` : res[2].length === 4 ? res[2] : 'asd'
		res[1] = res[1].length === 1 ? `0${res[1]}` : res[1]
		res[0] = res[0].length === 1 ? `0${res[0]}` : res[0]

		const date = new Date(res[2], res[1] - 1, res[0])
		const result = todoDays.slice();

		if (date.toString() === 'Invalid Date') {
			useError('Invalid Date')
			return
		}
		result.push({
			input: days[date.getDay() - 1],
			id: idForKeys,
			date: `${res[0]}.${res[1]}.${res[2]} `,
		})
		useTodoInput('')
		useTodoDays(result)
		useIdForKeys(idForKeys + 1)
	}
	const setInputDay = (e) => {
		const { value } = e.currentTarget;
		useTodoInput(value)
		useError('')
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.todo}>
				<h1>ToDooshka</h1>
				<h4>{error || ''}</h4>
				<form onSubmit={setDay}>
					<input placeholder="дд.мм.гг" onChange={setInputDay} value={todoInput} />
					<button type="submit">Add</button>
				</form>
				<div className={styles.todo__days}>
					{todoDays.map((item) => { return <ToDoDay data={item} key={item.id}/> }) }
				</div>
			</div>
		</div>
	)
}
