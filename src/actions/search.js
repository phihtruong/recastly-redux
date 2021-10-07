import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  // handle changing states after search event
  return (dispatch) => {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q
    }, (videos) => {
      console.log('videos from search youtube', videos);
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }


};

export default handleVideoSearch;
