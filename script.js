const JS_HOOK_STATE = ".js-hook-state";
const HIDDEN_CLASS = ".u-hidden";
const BUTTON = ".btn-submit";
const CARD = ".card";
const CONTENT = ".submitted-rating";

const ratingState = document.querySelectorAll(JS_HOOK_STATE);
const submitScore = document.querySelector(BUTTON);
const cardContainer = document.querySelectorAll(CARD);
const contentSubmittedRating = document.querySelector(CONTENT);

const objRatings = {};

const setStateRating = () => {
  ratingState.forEach((ratingElement, index) => {
    ratingElement.addEventListener("click", () => {
      resetStateRating();
      ratingElement.classList.add("active");
      submitScore.removeAttribute("disabled");
      objRatings.index = index + 1;
      updateContentSelectedRating();
    });
  });
};

const keyboardEvent = () => {
  ratingState.forEach((ratingElement, index) => {
    ratingElement.addEventListener("keyup", (event) => {
      if (event.code === "Enter") {
        resetStateRating();
        ratingElement.classList.add("active");
        submitScore.removeAttribute("disabled");
        objRatings.index = index + 1;
        updateContentSelectedRating();
      }
    });
  });
};

const resetStateRating = () => {
  ratingState.forEach((ratingElement) => {
    ratingElement.classList.remove("active");
  });
};

const submitRating = () => {
  submitScore.addEventListener("click", () => {
    showToggle();
  });
};

const showToggle = () => {
  cardContainer.forEach((card) => {
    card.classList.toggle("u-hidden");
  });
};

const updateContentSelectedRating = () => {
  contentSubmittedRating.innerHTML = `You selected ${objRatings.index} out of 5`;
};

const init = () => {
  setStateRating();
  submitRating();
  keyboardEvent();
};

init();
