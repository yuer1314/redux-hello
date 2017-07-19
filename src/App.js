import React from 'react';
import CommentBox from './CommentBox'
import PostBody from './PostBody'
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
	

  render() {

    return (
  	<Provider store={store}>
	  <div>
	    <div className="top  clearfix">
	      <PostBody />
	    </div>
	    <div className="bottom clearfix">
	      <CommentBox />
	    </div>
	  </div>
	</Provider>
    );
  }
}

export default App;
