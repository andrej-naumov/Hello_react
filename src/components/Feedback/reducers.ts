import { incrementDislikes, incrementLikes, resetResults } from "./actions";

type FeedbackState = {
    likes: number;
    dislikes: number;
  };
  
  type FeedbackAction = 
    | ReturnType<typeof incrementLikes>
    | ReturnType<typeof incrementDislikes>
    | ReturnType<typeof resetResults>;
  
  const initialState: FeedbackState = {
    likes: 0,
    dislikes: 0
  };
  
  const feedbackReducer = (state: FeedbackState = initialState, action: FeedbackAction): FeedbackState => {



    switch (action.type) {
      case 'INCREMENT_LIKES':
        console.log(action);
        return { ...state, likes: state.likes + action.payload };
      case 'INCREMENT_DISLIKES':
        return { ...state, dislikes: state.dislikes + 1 };
      case 'RESET_RESULTS':
        return { likes: 0, dislikes: 0 };
      default:
        return state;
    }
  };
  
  export default feedbackReducer;
  