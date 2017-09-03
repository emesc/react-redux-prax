// import a JS module; refer to node_modules > react
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// provide a path reference to your own created components
import SearchBar from "./components/search_bar";

import VideoList from "./components/video_list";

// from Google API https://console.developers.google.com/apis/credentials?project=my-react-project-178506&organizationId=664242582719
const API_KEY = "AIzaSyChtnO0nrr5olhcdpvK6XxWy33rAHldOl4";

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
		super(props);

		this.state = { videos: [] };

		// let's move the YTSearch function since it'll be good for the user if they can immediately see some data pop up right away
		// this will immediately kick off once App is instantiated, function below (replaced by fat arrow) is a callback function that will be called with the datum/data which is a list of videos (replaced 'data' with 'videos' since it is an array of videos but it can be any name)
		YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
			// below is same as this.setState({ videos: videos }); using ES6 to refactor to use syntactic sugar when key and value are the same
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
