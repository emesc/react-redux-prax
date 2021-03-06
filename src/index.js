// import a JS module; refer to node_modules > react
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

// provide a path reference to your own created components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// from Google API https://console.developers.google.com/apis/credentials?project=my-react-project-178506&organizationId=664242582719
const API_KEY = 'AIzaSyChtnO0nrr5olhcdpvK6XxWy33rAHldOl4'

// YTSearch takes an object (api key and search term) and function that gets called with response data
// YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
// 	console.log(data);
// });

// Create a new component. This component should produce some HTML
// take this App as a class, not an instance; like factory which produces instances of components that gets rendered to the DOM
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// };

// let's refactor App function above to a class since the user can search for different terms and we have to update the search
// data changing over time is a great use for state
class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			videos: [],
			selectedVideo: null,
		}

		this.videoSearch('siargao')
	}

	videoSearch(term) {
		// let's move the YTSearch function since it'll be good for the user if they can immediately see some data pop up right away
		// this will immediately kick off once App is instantiated, function below (replaced by fat arrow) is a callback function that will be called with the datum/data which is a list of videos (replaced 'data' with 'videos' since it is an array of videos but it can be any name)
		YTSearch({ key: API_KEY, term: term }, videos => {
			// below is same as this.setState({ videos: videos }); using ES6 to refactor to use syntactic sugar when key and value are the same
			this.setState({
				videos,
				selectedVideo: videos[0],
			})
		})
	}

	// App is the parent component of VideoList; VideoList needs access on the app state/list of videos at any given time
	// we need to pass some data from the parent component App into the child component VideoList
	// we do this by defining a property on the jsx tag
	// in a class based component, props is available anywhere that we define as this.props; note this when doing refactoring
	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term)
		}, 300)
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					// onVideoSelect is a callback function that will be passed to VideoListItem thru VideoList
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
					videos={this.state.videos}
				/>
			</div>
		)
	}
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
