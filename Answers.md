1. What problem does the context API help solve?
    It helps solve the problem of passing down state in a component tree. It prevents prop drilling down that tree.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions - An object created using action creators that specifies a type and may come with a payload to be used  in the reducer function.
    Reducers- A function that takes in a state and an action and through the action type is able to determine how to change the state given and return a new state.
    Store - Where application state lives, a.k.a 'the single source of truth' of an application because it is there and only there that global application state is found.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state refers to global state accessible to all components, whereas Component state refers to state used in a single component. One might want to use Application State to be able to access state throughout multiple components with ease, or use Component state to keep division of state and props through components.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux thunk allows us to create nested functions, and allows us to change our action creators into async functions.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
    My favorite state management system has probably been redux, as it provides extremely predictable ways to control state and access state through multiple components.
