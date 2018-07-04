# Redux
This week we will explore why we would want to use redux, and how we can implement redux in a react application.


## Challenge 1 - A Redux Based App
By creating a store and using the dispatch && subscribe APIs, we will create a small redux based application. On each update to the store, we should rerender a button and a count of how many times the button has been clicked.

To do this exercise, lets use the [Code Sandbox](https://codesandbox.io/s/v8p75vno3). In the sandbox open `src/index.js`. This is where we will build our app.

As you can see there is already a render method in the source, which is then being called. Currently the render button is rendering a hard coded count value, and the button handler opens an alert instead of dispatching an action.

### Define Store
  * Create a reducer, that updates a counter in state when `action.type === 'increment'`
  * Create our store with the reducer and an initial state of `{ count: 0 }`

### Subscribe
  * Pass render to our stores subscribe
  * Update render to render the count value inside our store in the span
  * Update the button handler to dispatch an action of `{ type: 'increment' }`


### Additional excercise
Its quite common for actions to also need to dispatch data along with the `action.type`. We normally assign this to `action.payload`. lets update our reducer to increment based on a value stored on the payload key. Then lets make our action that we dispatch include a payload of the current count value (this should create an exponential increment).



## Challenge 2 - Redux In Our App

To do this you will need to have your app login setup so it successfully retrieves a user's access token and routes the user to a 'home' page.

1. Lets define our store in `src/store.js`.
    * The reducer ofcourse will need to take 2 arguments, first being the current state and the second the action. the reducer can for now just return the current state, we can update it later
    * The stores initial state should be `{ currentUser: null }`

2. In the root of our app we should include `Provider` so our component's can connect.

3. Lets connect our login page so it has access to our stores dispatch method.

4. Now that we have access to our dispatch method in our login, in the success code path for logging in lets dispatch an action with a type (maybe 'login_succss'?) that contains the user w/ access token as a payload.

5. We will now need to update our reducer to know how to update the state when our action is dispatched.

6. We can now connect our `Home` component to the store and use a `mapStateToProps` function to inject our currentUser into props.

If you get stuck with any of these steps try looking at [redux docs](https://redux.js.org/) and [react-redux docs](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#api), or ask us!


### Additional
Now that we are using our redux store to pass the current user between routes, we have no need to pass our token down from our app container. We can also remove it from the app container's state, and the state update `setToken`.

## Challenge 3 - Load and render posts

Lets update our home page to load and render posts from the posts endpoint. We will build this to add the posts to the store.

1. When our `Home` component has mounted (componentDidMount) we should make a request to the API to retrieve some posts. Remember the api docs are [here](../server/readme.md).

2. Once we are successfully requesting our posts, we should dispatch a new action to the store with them. It should have its own type ('posts_loaded'?).

3. We should update our store's reducer to be able to handle the new action type. We should also make sure we update the shape of our initial state so it is the correct shape.

4. Update our home `mapStateToProps` to also retrieve the posts from the store.

5. Update our render to map over the posts in props, and render a `Post` component for each. Inspect the props in each post to figure out what the render of `Post` should look like.

### Additional Exercise

If you haven't already it would be good to add logout functionality to the app. (this will need another action).

## Challenge 4 - Persisted Store

Ya know what would be good? If when a user returns to our app, instead of waiting for their posts to load and looking at a blank screen. We could persist the current set of posts, so they have something to look at while anything new loads. look at [redux-persist](https://github.com/rt2zz/redux-persist) for this.

Once we start persisting the store, it would be cool to add a button over the feed when when the new post loads to scroll back to the top.

