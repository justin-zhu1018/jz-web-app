import React, {Component} from 'react';
import BlogForm from '../components/blogForm';
import BlogCard from '../components/blogCard';
import {Button, Jumbotron} from 'reactstrap';
import './blogPage.css';
const axios = require('axios');

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      posts: [],
    };
  }

  componentDidMount = () => {
    this.getBlogPosts();
  };

  getBlogPosts = () => {
    axios
      .get('/api')
      .then((response) => {
        const data = response.data;
        console.log('Data retrieved: ', response.data);
        this.setState({posts: data});
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  checkConsole = () => {
    console.log('------------ Submit ------------');
    console.log('title:', this.state.submittedTitle);
    console.log('Data: ', this.state.submittedBody);
  };

  updateTitle = (e) => {
    // console.log("update title", e);
    this.setState({title: e});
  };

  updateBody = (e) => {
    // console.log("update data", e);
    this.setState({body: e});
  };

  isFilled = () => {
    return this.state.title !== '' && this.state.body !== '';
  };

  handleData = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body,
    };
    axios({url: '/api/save', method: 'POST', data: payload})
      .then(() => {
        console.log('data SENT!');
        this.setState({title: '', body: ''});
        this.getBlogPosts();
      })
      .catch(() => {
        console.log('error');
      });
  };

  displayBlogPosts = (posts) => {
    if (!posts.length) {
      return null;
    }
    return posts.map((post, index) => (
      <BlogCard key={index} title={post.title} body={post.body} />
    ));
  };
  render() {
    return (
      <div className="blogPage">
        <div className="spacing-div" />
        <Jumbotron className="jumbotron-position">
          <h1>The Blog</h1>
          <p className="lead">Made with MERN stack magic!</p>
          <hr className="my-2" />
          <p>
            Responsive design, like everything else on this website. Custom CSS
            cards for posts because Reactstrap ones were not responsive. Button
            is disabled until both inputs in the form are filled in.
          </p>
        </Jumbotron>
        <div className="spacing-div" />
        <div className="content-container">
          <div className="component-container">
            <BlogForm
              title={this.state.title}
              body={this.state.body}
              updateTitle={this.updateTitle}
              updateBody={this.updateBody}
              handleData={this.handleData}
            />
            <div className="post-button spacing-below-button">
              <Button
                id="blogForm-button"
                disabled={!this.isFilled()}
                onClick={this.handleData}
              >
                Post
              </Button>
            </div>
            {this.displayBlogPosts(this.state.posts)}
          </div>
        </div>
        <div className="spacing-div" />
      </div>
    );
  }
}
