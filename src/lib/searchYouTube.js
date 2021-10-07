var searchYouTube = ({key, query, max = 5}, callback) => {
  // const myData = {
  //   key: key,
  //   part: 'snippet',
  //   key: key,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // };
  // fetch('https://www.googleapis.com/youtube/v3/search', myData)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   });
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
