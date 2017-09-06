import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props)
		this.state = { term: '' }
	}

	onInputChange(term) {
		this.setState({ term })
		this.props.onSearchTermChange(term)
	}

	// a controlled field is a form element like an input whose value is set by the state rather than the other way around
	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					// onChange={event => this.setState({ term: event.target.value })}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		)
	}
}

export default SearchBar
