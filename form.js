const steps = document.querySelectorAll(".step");
const stepForms = document.querySelectorAll(".step-form");
const nextButtons = document.querySelectorAll(".next-button");
const backButtons = document.querySelectorAll(".back-button");

let currentStep = 1;

const showStepForm = (stepNumber) => {
  stepForms.forEach((form) => {
    form.style.display = "none";
  });
  stepForms[stepNumber - 1].style.display = "block";
};

const updateStepIndicators = () => {
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  steps[currentStep - 1].classList.add("active");
};

const handleNextButton = () => {
  currentStep++;
  if (currentStep <= stepForms.length) {
    showStepForm(currentStep);
    updateStepIndicators();
  }

  if (currentStep > 1) {
    backButtons[currentStep - 1].style.display = "inline-block";
  }
};

const handleBackButton = () => {
  currentStep--;
  if (currentStep === 1) {
    backButtons[currentStep - 1].style.display = "none";
  }
  showStepForm(currentStep);
  updateStepIndicators();
};

nextButtons.forEach((button) => {
  button.addEventListener("click", handleNextButton);
});

backButtons.forEach((button) => {
  button.addEventListener("click", handleBackButton);
});

stepForms.forEach((form, index) => {
  form.addEventListener("submit", (event) => {
    if (index !== 4) {
      event.preventDefault();
    }
  });
});

showStepForm(currentStep);
updateStepIndicators();
