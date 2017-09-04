import React from 'react'

// will use ES6 shortcuts using {video} which is = props.video; no need to declare const video below
// const VideoListItem = (props) => {
// 	const video = props.video
// 	return (
// 		<li>Video</li>
// 	)
// }

const VideoListItem = ({video}) => {
	const imageUrl = video.snippet.thumbnails.default.url
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">	
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
}


export default VideoListItem