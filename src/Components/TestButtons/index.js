import React from 'react'
import axios from "axios";

function getOne() {
	axios.get('/generics/1').then(res => {
		console.log(res.data)
	})
}

function getAll() {
	axios.get('/generics').then(res => {
		console.log(res.data)
	})
}

function post() {
	axios.post('/generics', {data: "PUT DATA HERE"}).then(res => {
		console.log(res.data)
	})
}

function put() {
	axios.put('/generics/1').then(res => {
		console.log(res.data)
	})
}

function destroy() {
	axios.delete('/generics/1').then(res => {
		console.log(res.data)
	})
}

function Button(props) {
	return (<button onClick = {props.onClick}>{props.label}</button>)
}

export default function TestButtons () {
	return (
		<React.Fragment>
			<h3> Test Routes </h3>
			<Button onClick={getOne} label="GET One" />
			<Button onClick={getAll} label="GET All" />
			<Button onClick={post} 	 label="POST Call" />
			<Button onClick={put} 	 label="PUT Call" />
			<Button onClick={destroy} label="DESTROY Call" />

		</React.Fragment>
	)
}