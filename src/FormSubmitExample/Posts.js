import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../FormSubmitExample/actions/postActions'
class Posts extends Component {

    // no longer need as state comes from redux
    // constructor (props){
    //     super(props);
    //     this.state ={
    //         post : []
    //     };
    // }

    componentWillMount() {
        console.log("== componentWillMount ==");
        this.props.fetchPosts();
    }
    //use any var name for nextProps
    componentWillReceiveProps(nextProps) {
        console.log("== componentWillReceiveProps ==", nextProps);
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    } 
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3> {post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}
function mapStateToProps(state) {
    //posts has been used in combined reducer
    console.log("mapStateToProps", state);
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
};
//another way of mapStateToProps using arrow function
// const mapStateToProps = state => ({
//     posts :  state.posts.items 
// });
export default connect(mapStateToProps, { fetchPosts })(Posts);
