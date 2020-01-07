export const ADD_TWEETS = 'ADD_TWEETS';

export const fetchTweets = () => {
  return dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        dispatch(addTweets(response.tweets));
      });
  };
};

export const addTweets = tweets => ({
  type: ADD_TWEETS,
  payload: { tweets },
});
