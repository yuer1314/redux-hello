import React from 'react';
import CommentBox from './CommentBox'
import PostBody from './PostBody'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      	<PostBody />
      	<CommentBox />
      </div>
    );
  }
}

export default App;
