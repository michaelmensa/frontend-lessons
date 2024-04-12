### React Props

React Props (short for properties) allow you to pass data from one component to another as if you were passing arguments to a function. Props are read-only and help make your React components more dynamic and reusable.

### Learning Objectives

#### How to create basic React components using functions
- **Description:** Learn how to define React components using functional components, which are simpler and more concise than class components.
- **Example:** 
  ```jsx
  import React from 'react';

  function MyComponent() {
    return <div>Hello World!</div>;
  }
  ```

#### How to reuse components
- **Description:** Understand the concept of component reusability, where you can use the same component multiple times throughout your application.
- **Example:** 
  ```jsx
  function MyReusableComponent() {
    return <div>This component can be reused!</div>;
  }
  ```

#### How to pass properties to components
- **Description:** Learn how to pass data from parent components to child components using props.
- **Example:** 
  ```jsx
  function ParentComponent() {
    return <ChildComponent name="John" />;
  }

  function ChildComponent(props) {
    return <div>Hello, {props.name}!</div>;
  }
  ```

#### How to define types for components
- **Description:** Understand the importance of defining types for props using TypeScript or PropTypes to catch errors early in development.
- **Example:** 
  ```jsx
  import PropTypes from 'prop-types';

  function MyComponent(props) {
    return <div>Hello, {props.name}!</div>;
  }

  MyComponent.propTypes = {
    name: PropTypes.string.isRequired
  };
  ```

#### How to use Fragments
- **Description:** Learn how to use React Fragments to group multiple elements without adding extra nodes to the DOM.
- **Example:** 
  ```jsx
  function MyComponent() {
    return (
      <>
        <h1>Title</h1>
        <p>Paragraph</p>
      </>
    );
  }
  ```

#### When to use a key to improve a loop’s performance
- **Description:** Understand the significance of using keys when rendering lists in React to improve performance by helping React identify which items have changed, been added, or been removed.
- **Example:** 
  ```jsx
  function MyListComponent({ items }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  ```
### Resources
- [React Official Website](https://react.dev/)
- [Getting started with react](https://www.taniarascia.com/getting-started-with-react/)
- [React Fragments](https://react.dev/reference/react/Fragment)