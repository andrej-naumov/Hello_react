import React, { useState } from 'react';
import './styles.css';

function LikeDislikeCounter() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const resetCounters = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
      <button onClick={incrementLikes}>&#128077; Like</button>
      <h3>Likes: {likes}</h3>
      <button onClick={incrementDislikes}>&#128078; Dislike</button>
      <h3>Dislikes: {dislikes}</h3>
      <button onClick={resetCounters}>Reset</button>
      <h3>Sum: {likes - dislikes}</h3>
    </div>
  );
}

export default LikeDislikeCounter;