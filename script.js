// Define the correct answers for each question
const correctAnswers = {
    "option1": "Rusovce",
    "option2": "907",
    "option3": "1962",
    "option4": "Model kráľovskej koruny",
    "option5": "Ako križovatka obchodných ciest",
  };
  
  // Get all the radio buttons on the page
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  
  // Add an event listener to each radio button
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', event => {
      // Get the selected radio button and its value
      const selectedButton = event.target;
      const selectedValue = selectedButton.value;
  
      // Get the name of the radio button group
      const groupName = selectedButton.getAttribute('name');
  
      // Get the correct answer for the group
      const correctAnswer = correctAnswers[groupName];
  
      // Get all the labels in the group
      const labels = document.querySelectorAll(`input[name=${groupName}] + label`);
  
      // Set the color of the labels' text based on whether the answer is correct or not
      labels.forEach(label => {
        if (label.textContent.includes(correctAnswer)) {
          label.style.color = 'green';
        } else if (label.textContent.includes(selectedValue)) {
          label.style.color = 'red';
        } else {
          label.style.color = '';
        }
      });
  
      // Disable all the radio buttons in the group
      const radioGroup = document.querySelectorAll(`input[name=${groupName}]`);
      radioGroup.forEach(radio => {
        radio.disabled = true;
      });
    });
  });
  