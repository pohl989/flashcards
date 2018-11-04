const INCORRECT_ANSWER = 'INCORRECT_ANSWER';

export default (state = 0, action) => {
  switch (action.type) {
    case INCORRECT_ANSWER:
      return state + 1;
    default:
      return state;
  }
};

