import {
  SET_SUBMISSION,
  SET_QUESTION,
  SET_CORRECT,
  SET_PROGRESS,
  SET_MODAL
} from "../actions/submission";

const initialState = {
  question: null,
  userInput: null,
  correct: null,
  progress: 0,
  showmodal: false
};

const wordReducer = (state = initialState, action) => {
  if (action.type === SET_SUBMISSION) {
    return Object.assign({}, state, {
      userInput: action.submission
    });
  }
  if (action.type === SET_QUESTION) {
    return Object.assign({}, state, {
      question: action.question
    });
  }
  if (action.type === SET_CORRECT) {
    return Object.assign({}, state, {
      correct: action.correct
    });
  }
  if (action.type === SET_PROGRESS) {
    return Object.assign({}, state, {
      progress: action.progress
    });
  }
  if (action.type === SET_MODAL) {
    return Object.assign({}, state, {
      showmodal: action.modal
    });
  }
  return state;
};

export default wordReducer;
