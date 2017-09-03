// ES6 gives us access to JS modules which encapsulates the idea that all the code we write in separate files is Silo'd (we cant make references to other variables in that file) or separated from other code we write in other libraries we install in our project

// React to manage our components; ReactDOM to render our components in the browser

// when we create a component, we are creating a class/type of the component

// types of components in React:
// function component - some info goes in, some jsx comes out
// class component - used to have some internal record keeping; some ability to be aware of itself and what has happened to it since it's been rendered; eg, SearchBar will have user type something to its input

/**************************/
/* IMPORTING
/**************************/
// import still since jsx will be translate to React.createElement or it'll throw an error
// {} means import React but pull off the property Component as a variable called Component; same as:
// const Component = React.Component
import React, { Component } from 'react'

/**************************/
/* FUNCTION DECLARATION
/* USING FUNCTION INSTEAD OF CLASSES
/**************************/
// let's define the component, first using a function then transition to class later
// functional components do not have state
const SearchBar = () => {
	return <input /> // React.createElement
}

/**************************/
/* HANDLING EVENTS
/**************************/
// 2 steps in handling events: 1-declare an event handler 2-pass the event handler to the element that we want to monitor for events
// event handler is a function that should be run whenever the event occurs
// class components have state
class SearchBar extends React.Component {
	render() {
		// property=value pair; onChange is a React property, check the docs for other events
		// we can do return `<input onChange={event => console.log(event.target.value)} />` and get rid of the function declaration below
		return <input onChange={this.onInputChange} />
	}

	// naming convention: on/handle then the element then the event you're watching for
	// whenever we call an event handler, they're always called with an event object
	onInputChange(event) {
		// access value of the input
		console.log(event.target.value)
	}
}

/**************************/
/* INTRODUCTION TO STATES */
/* EXISTS ONLY ON CLASS BASED COMPONENTS!!!
/**************************/
// state is a plain JS object that is used to record and react to user events
// each class based component we define has its own state object
// whenever a state component is changed, the component immediately re-renders and also forces all of its children to re-render as well

// initialize the state object before using state inside a component
// to initialize the state, we set the property state to a plain JS object inside the class's constructor method

class SearchBar extends Component {
	// all JS classes have a special function called constructor
	// constructor function is the first and only function called automatically whenever a new instance of the class is created
	// constructor is always called whenever we instantiate eg, SearchBar inside index.js
	// constructor is reserved for doing some setup in the class like initializing variables/state
	constructor(props) {
		// rmb we extend React.Component; Component has its own constructor function
		// when we define a method that is already defined on the parent class which is Component, we can call that parent method on the parent class by calling super
		// thus super is calling the parent method
		super(props)
		// whenever we use state, we initialize it by creating a new object and assigning it to this.state
		// the object we pass will also contain properties that we want to record on the state
		// eg, below we want to record the property 'term' on state; this is the property that we want to record our change on for the search bar
		// what we want is that as the user starts typing on the input, we want to update this.state.term to not be an empty string but to be the value of the input
		this.state = { term: ''}
	}
	.
	.
	.
}

import React, { Component } from "react";

class SearchBar extends Component {
	// all JS classes have a special function called constructor
	// constructor function is the first and only function called automatically whenever a new instance of the class is created
	// constructor is always called whenever we instantiate eg, SearchBar inside index.js
	// constructor is reserved for doing some setup in the class like initializing variables/state
	constructor(props) {
		// rmb we extend React.Component; Component has its own constructor function
		// when we define a method that is already defined on the parent class which is Component, we can call that parent method on the parent class by calling super
		// thus super is calling the parent method
		super(props);
		// whenever we use state, we initialize it by creating a new object and assigning it to this.state
		// the object we pass will also contain properties that we want to record on the state
		// eg, below we want to record the property 'term' on state; this is the property that we want to record our change on for the search bar
		// what we want is that as the user starts typing on the input, we want to update this.state.term to not be an empty string but to be the value of the input
		// this.state = { term: ''}

		// each instance of a class based component has its own copy of states
		this.state = { term: "" };
	}

	render() {
		// to update state, use this.setState and pass in an object that contains a new state that we want to give our component
		// we always manipulate using this.setState()
		// when we are not modifying state, just referencing it so use state()
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default SearchBar;

/**************************/
/**************************/