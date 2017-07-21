import React, { Component } from 'react'

import { connect } from 'react-redux'
import PostBody from './PostBody'

class HomePage extends Component {

  render() {
    let { posts } = this.props
    console.log('posts', posts)
    let postList = posts.map(item => {
      return(
        <PostBody key={item.postId} postId={item.postId} />
      )
    })
    console.log('postList', postList)
    return (
      <div className="home">
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(HomePage)