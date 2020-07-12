import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BlogForm from "./components/blogForm";
import { Card, CardTitle, CardText } from "reactstrap";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      posts: [],
    };
  }

  componentDidMount = () => {
    this.getBlogPosts();
  };

  getBlogPosts = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        console.log("Data retrieved: ", response.data);
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  checkConsole = () => {
    console.log("------------ Submit ------------");
    console.log("title:", this.state.submittedTitle);
    console.log("Data: ", this.state.submittedBody);
  };

  updateTitle = (e) => {
    // console.log("update title", e);
    this.setState({ title: e });
  };

  updateBody = (e) => {
    // console.log("update data", e);
    this.setState({ body: e });
  };

  handleData = (event) => {
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body,
    };
    axios({ url: "/api/save", method: "POST", data: payload })
      .then(() => {
        console.log("data SENT!");
        this.setState({ title: "", body: "" });
        this.getBlogPosts();
      })
      .catch(() => {
        console.log("error");
      });
  };

  displayBlogPosts = (posts) => {
    if (!posts.length) {
      return null;
    }
    return posts.map((post, index) => (
      <Card body key={index}>
        <CardTitle>
          <strong>{post.title}</strong>
        </CardTitle>
        <CardText>{post.body}</CardText>
      </Card>
    ));
  };

  render() {
    return (
      <div className="App-header">
        <div className="margin-header">
          <h1>Welcome to the Jungle!</h1>
        </div>
        <BlogForm
          title={this.state.title}
          body={this.state.body}
          updateTitle={this.updateTitle}
          updateBody={this.updateBody}
          handleData={this.handleData}
        />
        <div>{this.displayBlogPosts(this.state.posts)}</div>
      </div>
    );
  }
}

export default App;
