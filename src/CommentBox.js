import React from 'react';
import store from './store'
import { connect } from 'react-redux'

class CommentBox extends React.Component {


handleSubmit=(e) =>{
  e.preventDefault()
  let newcomment=this.Input.value
  store.dispatch({type:'ADD_COMMENT',comment:newcomment})
  
  this.myform.reset()
}

  render() {
   
   
  	let commentList = this.props.comments.map((item) => (
      <li className="comment" key={Math.random()}>{item}</li>
    ))
    return (
      <div className="comment-box">
        {commentList}
        <form ref={form => this.myform = form} onSubmit={this.handleSubmit} className="comment-form">
          <input  ref = {Input=>this.Input =Input}type="text" className="input" />
          <button type="submit" className="submit-btn" >提交</button>
        </form>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  comments: state
});

export default connect(mapStateToProps)(CommentBox);
