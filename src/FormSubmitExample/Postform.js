import React, { Component } from 'react'

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPosts} from '../FormSubmitExample/actions/postActions'
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();

        const post ={
            title : this.state.title,
            body : this.state.body
        }
            //call postnew action 
            this.props.createPosts(post);
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>title : </label> <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div>
                        <label>Body : </label> <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPosts : PropTypes.func.isRequired
}
export default connect(null,{createPosts})(PostForm);
