# Styled Components React Project

This project demonstrates the implementation of Styled Components in a React application.
The goal of the project is to practice and present the learning outcome of component-based styling using the Styled Components library.

The application is a simple Task Tracker where tasks are displayed and users can mark them as completed. Instead of using traditional CSS files, the project uses Styled Components to style React components directly within JavaScript.

Learning Outcome

The main objective of this project is to demonstrate the ability to:

- Implement Styled Components in a React application
- Apply component-based styling
- Replace traditional CSS with CSS-in-JS
- Maintain clean and reusable UI components

Technologies Used

- **React**
- **JavaScript (ES6)**
- **Styled Components**
- **JSX**
- **HTML**

Installation

To use Styled Components in this project, the library was installed using npm.

```bash
npm install styled-components
```

Project Structure

```
src
 ┣ components
 ┃ ┣ Header.js
 ┃ ┣ TaskList.js
 ┃ ┣ TaskItem.js
 ┃ ┗ Footer.js
 ┣ App.js
 ┣ index.js
```

Each component is styled using **Styled Components instead of external CSS files**.

# What Are Styled Components?

Styled Components is a **CSS-in-JavaScript library** that allows developers to write CSS directly inside React components.

It uses **tagged template literals** to create styled elements.

Example:

```javascript
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  background: #4caf50;
  padding: 15px;
  text-align: center;
`;
```

The styled component can then be used like a normal React component:

```jsx
<Title>Student Task Tracker</Title>
```

Implementation in the Project

### 1️⃣ Styled Header Component

The header was styled using Styled Components to define layout and colors.

Example:

```javascript
const HeaderContainer = styled.div`
  background: #222;
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;
```

---

### 2️⃣ Styled Task List

The task list container was styled to center the content and maintain consistent layout.

Example:

```javascript
const ListContainer = styled.div`
  width: 400px;
  margin: auto;
`;
```

---

### 3️⃣ Styled Task Items

Each task item is styled as a card-like element.

Example:

```javascript
const Task = styled.div`
  background: #f4f4f4;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
```

---

## Advantages of Styled Components

Using Styled Components provides several benefits:

- **Component-based styling**
- **No CSS naming conflicts**
- **Improved code readability**
- **Dynamic styling based on props**
- **Scoped styles**

---

## Running the Project

To run the project locally:

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm start
```

3. Open the application in the browser:

```
http://localhost:3000
```

## Conclusion

This project successfully demonstrates the **implementation of Styled Components in a React application**.
By replacing traditional CSS with component-based styling, the application becomes more modular, maintainable, and scalable.

The project highlights how **Styled Components improve the organization and structure of styling in modern React development**.

# Reusable Components React Project

This project demonstrates the creation and use of **reusable components in a React application**.
The goal of the project is to practice component-based development by building multiple UI elements that can be reused across different parts of a web application.

All components are displayed on **a single page** to demonstrate how they can be reused and combined to build a complete interface.

---

## Learning Objective

The objective of this project is to understand and demonstrate:

- Creating reusable components in React
- Passing data between components using **props**
- Building modular UI structures
- Reusing components multiple times within a page
- Improving code maintainability and reusability

---

## Technologies Used

- **React**
- **JavaScript (ES6)**
- **JSX**
- **HTML**
- **CSS / Inline Styling**

---

## Reusable Components Implemented

The following reusable components were created for this project:

### Button Component

A reusable button component that accepts text and click actions.

Example use:

```jsx
<Button text="Submit" />
<Button text="Cancel" />
```

---

### Input Component

A reusable input field that can accept different input types and placeholders.

Example:

```jsx
<Input type="text" placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
```

---

### Checkbox Component

A reusable checkbox component used for selecting options.

Example:

```jsx
<Checkbox label="Accept Terms and Conditions" />
```

---

### Card Component

A container component used to wrap other elements and organize the layout.

Example:

```jsx
<Card title="User Information">
  <p>Name: Deborah</p>
</Card>
```

---

### Table Component

A reusable table component used to display structured data.

Example:

```jsx
<Table data={users} />
```

---

### Form Component

A form component that combines reusable **Input** and **Button** components to collect user information.

Example:

```jsx
<Form />
```

---

## Project Structure

```
src
 ┣ components
 ┃ ┣ Button.js
 ┃ ┣ Input.js
 ┃ ┣ Checkbox.js
 ┃ ┣ Card.js
 ┃ ┣ Table.js
 ┃ ┗ Form.js
 ┣ App.js
 ┣ index.js
```

Each component is designed to be **independent and reusable**, making it easy to use them across different parts of the application.

---

## How the Components Are Reusable

Reusable components are designed to accept **props**, which allows them to display different content depending on how they are used.

For example:

```
<Button text="Save" />
<Button text="Delete" />
```

The same component is reused with different values.

---

## Conclusion

This project demonstrates how **React components can be designed for reuse**, allowing developers to build scalable and maintainable applications.

By breaking the UI into reusable pieces such as buttons, inputs, tables, and forms, the application becomes easier to manage and extend.

Reusable components are a core concept in **modern React development** and help improve both productivity and code organization.
