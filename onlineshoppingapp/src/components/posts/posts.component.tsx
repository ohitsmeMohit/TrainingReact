import React, { Component } from "react";

export default class Posts extends Component {
  state = { posts: [] };

  render() {
    console.log("Within render..");
    return (
      <div>
        <header>
          <h1>All Posts</h1>
        </header>
        {this.state.posts.length === 0 ? (
          <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
        ) : (
          <ul className="list-group">
            {this.state.posts.map((post: any) => (
              <li className="list-group-item" key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  componentDidMount(): void {
    console.log("Within componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }
}
