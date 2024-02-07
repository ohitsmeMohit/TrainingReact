import React from "react";
import ListOfProducts from "../listofproducts/listofproduct.component";
import Posts from "../posts/posts.component";

class App extends React.Component {
  render(): React.ReactNode {
    return <ListOfProducts />;
    // return <Posts />;
  }
}

export default App;
