/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import ToDoDay from './tododay/tododay'
import './app.scss'

export default function App() {
	const [todoDays, useTodoDays] = useState([]);
	const [todoInput, useTodoInput] = useState('')
	const [frag, useFrag] = useState()
	const [idForKeys, useIdForKeys] = useState(0)
	const [error, useError] = useState('')
	const setDay = (e) => {
		e.preventDefault();
		if (!todoInput) {
			return
		}
		const res = todoInput.split('.');
		if (res.length !== 3) {
			useError('Invalid Date')
			return
		}

		const dateArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
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
			input: dateArr[date.getDay() - 1],
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

	useEffect(() => {
		const res = todoDays.map((item) => {
			return <ToDoDay data={item} key={item.id}/>
		})

		useFrag(res)
	}, [todoDays])
	return (
		<div className='wrapper'>
			<div className='todo'>
				<h1>ToDooshka</h1>
				<h4>{error ? `${error}` : ''}</h4>
				<form onSubmit={setDay}>
					<input placeholder="дд.мм.гг" onChange={setInputDay} value={todoInput}></input>
					<button type="submit">Add</button>
				</form>
				<div className='todo__days'>
					{frag}
				</div>
			</div>
		</div>
	)
}
