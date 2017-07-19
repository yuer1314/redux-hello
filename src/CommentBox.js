import React from 'react';

class CommentBox extends React.Component {

state = {
  comments: [
    "hello1",
    "hello2"
  ]
}
handleSubmit(e) {
  e.preventDefault()
  
}

  render() {
  	let commentList = this.state.comments.map((item) => (
      <li className="comment" key={Math.random()}>{item}</li>
    ))
    return (
      <div className="comment-box">
        {commentList}
        <form onSubmit={this.handleSubmit} className="comment-form">
          <input  type="text" className="input" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
       
      </div>
    );
  }
}

export default CommentBox;