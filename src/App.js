import React, { Component } from 'react';

import './App.css';
//import Counter from './Counter';
//import store from './store/';
import { Provider } from 'react-redux'
import Posts from './FormSubmitExample/Posts'
import PostForm from './FormSubmitExample/Postform'
import formstore from './store/FormStore'
class App extends Component {
  render() {
    return (
      <Provider store={formstore}>
        <div className="App">
          <h1>Welcome</h1>
          {/* <Counter /> */}
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
