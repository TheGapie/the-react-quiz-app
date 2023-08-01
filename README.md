# The React Quiz App

![React Quiz App](quiz_app_screenshot.png)

The React Quiz App is a single-page quiz application focused on testing your knowledge of React. The app comes equipped with various functionalities, including a progress bar, a timer, a score tracker, and a display of the previous highest score. The quiz questions are sourced from a `questions.json` file located in the `./data` directory. To fetch the quiz data, the app utilizes json-server, which serves as a mock server.

## Table of Contents

- [Introduction](#the-react-quiz-app)
- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quiz Data](#quiz-data)
- [Contributing](#contributing)

## Getting Started

To run The React Quiz App locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/TheGapie/the-react-quiz-app.git
```

2. Navigate to the project directory:

```bash
cd the-react-quiz-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the json-server (mock server for quiz data):

```bash
npm run server
```

5. Start the development server:

```bash
npm start
```

The app will be accessible at `http://localhost:3000` in your web browser.

## Features

- **Quiz Progress:** Track your progress through the quiz with a visual progress bar.
- **Quiz Timer:** Set a time limit for the quiz, and the timer will countdown as you progress through the questions.
- **Scoring:** The app keeps track of your score based on your answers to each question.
- **Highest Score:** Display the highest score achieved from previous quiz attempts.
- **Quiz Questions:** The app uses questions from a `questions.json` file served by json-server.

## Tech Stack

- React
- json-server (for serving quiz data)
- CSS (for styling)

## Quiz Data

The quiz questions are sourced from a `questions.json` file located in the `./data` directory. The `json-server` package is used to serve the quiz data, enabling the app to fetch questions from the mock server.

The `questions.json` file follows a specific format with each question having an ID, the question itself, an array of options, and the correct answer. For example:

```json
[
  {
    "question": "Which is the most popular JavaScript framework?",
    "options": ["Angular", "React", "Svelte", "Vue"],
    "correctOption": 1,
    "points": 10
  }
  // Additional questions...
]
```

Feel free to modify the `questions.json` file to include more questions or customize the quiz content.

## Contributing

Contributions to The React Quiz App are welcome! If you find a bug, have an idea for an improvement, or wish to add more quiz questions, please create an issue or submit a pull request. Please adhere to the code style and guidelines used in the project.

Put your React knowledge to the test with The React Quiz App! 🚀🧠
