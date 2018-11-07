const SET_CATEGORY = 'SET_CATEGORY';
const SET_COUNT = 'SET_COUNT';

export const setCategory = (category) => {
  return { type: SET_CATEGORY, category };
};

export const setCardCount = (count) => {
  return { type: SET_COUNT, count };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { category: action.category };
    case SET_COUNT:
      return { count: action.count };
    default:
      return state;
  }
};

