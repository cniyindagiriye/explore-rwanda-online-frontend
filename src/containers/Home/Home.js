import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Celestin',
    };
  }

  render() {
    const { name } = this.state;
    return <div>Hello {name}</div>;
  }
}

export default Home;
