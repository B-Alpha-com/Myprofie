import React, { Component } from "react";
import WebPage from "./WebPage";
import image from "./Asset/image2.jpg";
import image1 from "./Asset/image1.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showImage: true,
    };
  }
  handleClick = () => {
    if (this.state.showImage === true) {
      this.setState({ showImage: false });
    } else {
      this.setState({ showImage: true });
    }
  };
  render() {
    const Condition = this.state.showImage;
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${this.state.showImage ? image1 : image})`,
          backgroundSize: "contain",
        }}
      >
        <WebPage onclick={this.handleClick} condition={Condition} />
      </div>
    );
  }
}

export default App;
