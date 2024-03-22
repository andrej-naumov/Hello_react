import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementLikes, incrementDislikes, resetResults } from './actions.ts';
import Icon from '@mdi/react';
import { mdiThumbDown, mdiThumbUp, mdiRefresh } from '@mdi/js'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedback() {
  const likes = useSelector(state => state.likes);
  const dislikes = useSelector(state => state.dislikes);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(incrementLikes());
  };

  const handleDislikeClick = () => {
    dispatch(incrementDislikes());
  };

  const handleResetClick = () => {
    dispatch(resetResults());
  };

  return (
    <div>
      <div className="mb-3"> 
        <Icon path={mdiThumbUp} size={3} onClick={handleLikeClick} />
        <span className="likes-counter">{likes}</span>
      </div>
      <div className="mb-3"> 
        <Icon path={mdiThumbDown} size={3} onClick={handleDislikeClick} />
        <span className="likes-counter">{dislikes}</span>
      </div>
      <button onClick={handleResetClick} className="btn btn-primary mb-3"> 
        <Icon path={mdiRefresh} size={1} />
        Reset Results
      </button>
    </div>
  );
}

export default Feedback;
