import React, { Component } from 'react';
import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/';
const GITHUB_API_REPOS_URL = `${GITHUB_API_BASE_URL}repos/`;

class GithubItem extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      name: '',
      description: '',
      url: '',
      star: 0,
      language: ''
    };
    this.fetchData(this.props.repository);
  }
  fetchData(repository) {
    const url = `${GITHUB_API_REPOS_URL}${repository}`;
    axios.get(url).then(({data}) => {
      console.log(data);
      this.setState({
        name: data.name,
        description: data.description,
        url: data.html_url,
        star: data.stargazers_count,
        language: data.language
      });
    });
  }

  render() {
    return (
      <div className="item item-github">
        {'name' in this.state ? <span className="name">{this.state.name}</span> : false}
        {'title' in this.props ? <span className="title"><small>{this.props.title}</small></span> : false}
        {'star' in this.state ? <span className="star"><i>{this.state.star}</i></span> : false}
        {'description' in this.state ? <span className="description">{this.state.description}</span> : false}
      </div>
    );
  }
}

export default GithubItem;
