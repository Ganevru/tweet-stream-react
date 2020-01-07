export const ADD_TWEETS = 'ADD_TWEETS';

export const fetchTweets = () => {
  console.log('fetchTweets');
  return dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => {
        dispatch(addTweets(response));
      });
  };
};

export const addTweets = tweets => ({
  type: ADD_TWEETS,
  payload: { tweets },
});
