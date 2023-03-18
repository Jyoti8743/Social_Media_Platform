import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'
import { getPosts } from '../../actions/post'

const Posts = ({getPosts, post: {posts, loading}}) => {
useEffect(()=> {
    getPosts();
}, [getPosts]);
var isAuthenticated = localStorage.getItem("token") ? true: false;
  if(!isAuthenticated){
      return <Navigate to="/login"/>
      }

  return loading ? <Spinner /> :(
    <>
    <h1 className="large text-primary">Posts</h1>
    <p className="lead">
       <i className="fas fa-user"></i>Welcome to the Communtiy
    </p>
   <PostForm />
    <div className="posts"> 
      {posts.map(post => (
        <PostItem key={post._id} post ={post} />
      ))}
    </div>
    </>
   
  )
}

Posts.propTypes = {
getPosts: PropTypes.func.isRequired,
post: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts)
