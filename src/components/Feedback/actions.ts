export const incrementLikes = () => {
    return { type: 'INCREMENT_LIKES' } as const;
  };
  
  export const incrementDislikes = () => {
    return { type: 'INCREMENT_DISLIKES' } as const;
  };
  
  export const resetResults = () => {
    return { type: 'RESET_RESULTS' } as const;
  };