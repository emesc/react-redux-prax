import React from "react";
import VideoListItem from './video_list_item'

// let's declare a function component since video list does not need to keep a list of states
// props arrive as an argument to the functional component
// in a functional component, the props object is an argument
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem video={video} />
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
};

export default VideoList;
