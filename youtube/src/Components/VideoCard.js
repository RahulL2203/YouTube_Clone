import React from 'react';

const VideoCard = ({info}) => {
 
    const {snippet,statistics} = info;
   // const {channelTitle,thumbnails,title} = snippet;

//    const {snippet , statistics} = info;
//   const {channelTitle, title,thumbnails} = snippet;
  return (
 <div className="m-2 p-2 w-60 shadow-lg">
     <img className= "rounded-lg" alt="thumbnail" src={snippet?.thumbnails?.medium?.url}/>
     <ul>
        <li className="font-bold py-2">{snippet?.title}</li>
        <li>{snippet?.channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
     </ul>
      
    </div>
  )
}

export default VideoCard;