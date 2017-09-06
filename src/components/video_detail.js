import React from 'react'

// can use props as argument, but we really dont need props, just the video property
// we'll use ES6 shortcuts using {video} which is = props.video; no need to declare const video below; otherwise, with (props) as params we'll need to declare const video = props.video
const VideoDetail = ({ video }) => {
	// check that the video has been provided in the props before it attempts to render
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} className="embed-responsive-item" />
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail
