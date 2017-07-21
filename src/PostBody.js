import React from 'react';
import { connect } from 'react-redux'
import store from './store'
import {
  Link
} from 'react-router-dom'

class PostBody extends React.Component {
	handleClick=()=>{
		
		store.dispatch({type:'INCREMENT_LIKE', postId:this.props.postId })
	}
  render() {
  	 
     let { postId, posts } = this.props
  	 let currentPost=posts.filter(value => value.postId === postId)[0]
     console.log(currentPost)
    return (
      <div className="post-body">
       <Link to={`/post/${postId}`} className="title">
          {currentPost.title}
        </Link>
      <div className="likes-num num" onClick={this.handleClick}>
      {currentPost.likes}赞
      </div>
      <div className="comment-num num">
       {this.props.comments.length}评论
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
});

export default connect(mapStateToProps)(PostBody);