import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import Content from './content';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: {},
      config: {}
    }

    this.fetchData();
    this.fetchConfig();
  }

  fetchData() {
    const url = '/cv.json';
    axios.get(url).then(({data}) => {
      this.setState({data});
    });
  }

  fetchConfig() {
    const url = '/config.json';
    axios.get(url).then(({data}) => {
      this.setState({config: data});
    });
  }

  render() {
    return (
      <div className="app">
        <Header data={this.state.data} />
        <Content data={this.state.data} config={this.state.config} />
      </div>
    );
  }
}

export default App;
