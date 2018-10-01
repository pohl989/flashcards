# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
qas = [
["When would you use a Class Component over a Functional Component?", 
  "If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component."],

["What are keys in React and why are they important?",
  "Keys are what help React keep track of what items have changed, been added, or been removed from a list. It’s important that each key be unique among siblings. React uses a process called reconciliation and part of this reconciliation process is performing a diff of a new element tree with the most previous one. Keys make this process more efficient when dealing with lists because React can use the key on a child element to quickly know if an element is new or if it was just moved when comparing trees. And not only do keys make this process more efficient, but without keys, React can’t know which local state corresponds to which item on move. So never neglect keys when mapping."],

["What is JSX?",
 "JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance."],

["Why can’t browsers read JSX?",
  "Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser."],

["What do you understand from 'In React, everything is a component.'",
  "Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI."],

["Explain the purpose of render() in React.",
  "Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked."],

["What is Props?",
  "Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data."],

["What is a state in React and how is it used?",
  "States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state()."],

["What is arrow function in React? How is it used?",
  "Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions."],

["What are the different phases of React component’s lifecycle?",
  "There are three different phases of React component’s lifecycle:\n
Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.\n
Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.\n
Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM."],

["Explain the lifecycle method componentWillMount()",
"Executed just before rendering takes place both on the client as well as server-side."],

["Explain the lifecycle method componentDidMount()",
  "Executed on the client side only after the first render."],

["Explain the lifecycle method componentWillReceiveProps()", "Invoked as soon as the props are received from the parent class and before another render is called."],

["Explain the lifecycle method shouldComponentUpdate()", "Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false."],

["Explain the lifecycle method componentWillUpdate()", "Called just before rendering takes place in the DOM."],

["Explain the lifecycle method componentDidUpdate()", "Called immediately after rendering takes place."],

["Explain the lifecycle method componentWillUnmount()", "Called after the component is unmounted from the DOM. It is used to clear up the memory spaces."],

["What can you do with a Higher Order Component (HOC)",
  "HOC can be used for many tasks like:\n\n
  Code reuse, logic and bootstrap abstraction\n
  Render High jacking\n
  State abstraction and manipulation\n
  Props manipulation"],

["What is the significance of keys in React?",
  "Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM. These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance."]

]

qas.map{ |qa| Card.create(question: qa[0], answer: qa[1])}
