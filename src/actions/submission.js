import { BASE_URL } from "../config";

/*
Set the users answer to the problem
*/
export const SET_SUBMISSION_LOADING = "SET_SUBMISSION_LOADING";
export const setSubmissionLoading = () => ({
  type: SET_SUBMISSION_LOADING
});

export const SET_SUBMISSION = "SET_SUBMISSION";
export const setSubmission = submission => ({
  type: SET_SUBMISSION,
  submission
});

export const SET_SUBMISSION_ERROR = "SET_SUBMISSION_ERROR";
export const setSubmissionError = error => ({
  type: SET_SUBMISSION_ERROR,
  error
});

export const userAnswer = answer => (dispatch, state) => {
  //console.log(state().test.question);
  const authToken = state().auth.authToken;
  //console.log("get it");
  fetch(`${BASE_URL}/users/submit`, {
    method: "PUT",
    headers: {
      // Provide our auth token as credentials
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ answer: answer })
  }).then(() => {
    //console.log("get it");
    dispatch(fetchNextWord());
  });
};

/*
Set progress
*/
export const SET_PROGRESS_LOADING = "SET_PROGRESS_LOADING";
export const setProgressLoading = () => ({
  type: SET_PROGRESS_LOADING
});

export const SET_PROGRESS = "SET_PROGRESS";
export const setProgress = progress => ({
  type: SET_PROGRESS,
  progress
});

export const SET_PROGRESS_ERROR = "SET_PROGRESS_ERROR";
export const setProgressError = error => ({
  type: SET_PROGRESS_ERROR,
  error
});

/*
Set Correct
*/
export const SET_CORRECT_LOADING = "SET_CORRECT_LOADING";
export const setCorrectLoading = () => ({
  type: SET_CORRECT_LOADING
});

export const SET_CORRECT = "SET_CORRECT";
export const setCorrect = correct => ({
  type: SET_CORRECT,
  correct
});

export const SET_CORRECT_ERROR = "SET_CORRECT_ERROR";
export const setCorrectError = error => ({
  type: SET_CORRECT_ERROR,
  error
});

/*
Set the test word
*/
export const SET_QUESTION_LOADING = "SET_QUESTION_LOADING";
export const setQuestionLoading = () => ({
  type: SET_QUESTION_LOADING
});

export const SET_QUESTION = "SET_QUESTION";
export const setQuestion = question => ({
  type: SET_QUESTION,
  question
});

export const SET_QUESTION_ERROR = "SET_QUESTION_ERROR";
export const setQuestionError = error => ({
  type: SET_QUESTION_ERROR,
  error
});

/*
Fetch the word and the answer from the database
*/

export const fetchNextWord = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${BASE_URL}/users/next`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setSubmission(data.last));
      dispatch(setCorrect(data.correct));
      dispatch(setQuestion(data.question.question));
      dispatch(setProgress(data.progress));
    })
    .catch(err => {
      dispatch(setQuestionError(err));
    });
};

/*
Create an action that fetches the new endpoint for questions
update the state
*/

// Create submit for modals

export const SET_MODAL = "SET_MODAL";
export const setModal = modal => ({
  type: SET_MODAL,
  modal
});

export const modalSetter = modal => dispatch => {
  dispatch(setModal(modal));
};
