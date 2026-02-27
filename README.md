This project is a small React application developed as a presentation of study/practice of learning outcomes.
The aim of the project is to demonstrate core React concepts through a simple and understandable application without complex logic or external libraries.

The application allows users to:

View a list of tasks

Mark tasks as completed

Observe how React updates the UI efficiently

Learning Objectives Covered

This project demonstrates the following React concepts:

Virtual DOM

JSX

Components (Functional and Class Components)

Props

State

Lifecycle Methods

React Fragments

Event Handling

Technologies Used

React

JavaScript (ES6)

HTML

CSS (Inline Styling)

Project Structure
src/
┣ components/
┃ ┣ Header.js
┃ ┣ TaskList.js
┃ ┣ TaskItem.js
┃ ┗ Footer.js
┣ App.js
┣ index.js
Explanation of Key Concepts Used
JSX (JavaScript XML)

JSX is used in all components to write HTML-like syntax inside JavaScript files, making the UI structure easier to understand.

Example:

<h1>Student Task Tracker</h1>
Components

The application is divided into reusable components:

Functional Components: Header, TaskItem, Footer

Class Component: TaskList

This makes the application modular and easy to maintain.

Props

Props are used to pass data from parent components to child components.

Example:

TaskList passes task data and functions to TaskItem using props.

State

State is used inside the TaskList class component to manage the list of tasks and their completion status.

When the state changes, React automatically updates the UI.

Lifecycle Method

The lifecycle method componentDidMount() is used in the TaskList component to demonstrate when a component is mounted.

Example:

componentDidMount() {
console.log("TaskList component mounted");
}
React Fragment

Fragments are used to group elements without adding extra nodes to the DOM.

Example:

<>
{/_ Multiple elements _/}
</>
Event Handling

Event handlers are used to handle user interactions such as clicking a checkbox to mark a task as completed.

Example:

onChange={() => toggleTask(task.id)}
Virtual DOM

React uses the Virtual DOM to efficiently update only the parts of the UI that change when the state is updated, improving performance.

This happens automatically when state changes.

How to Run the Project

Install dependencies:

npm install

Start the development server:

npm start

Open your browser and visit:

http://localhost:3000
Deployment

The project can be deployed using platforms such as:

Netlify

Vercel

GitHub Pages

The deployment demonstrates how a React application can be built and hosted online.

Conclusion

This project successfully demonstrates the fundamental concepts of React in a simple and practical way.
It serves as a learning exercise and a presentation-ready project that shows understanding of React’s core principles.
