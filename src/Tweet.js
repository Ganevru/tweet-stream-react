import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <article className="Tweet">
      <header>
        <h2>user id: {tweet.userId}</h2>
      </header>
      <p>{tweet.body}</p>
    </article>
  );
};

export default Tweet;
