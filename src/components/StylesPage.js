import React, { Component } from 'react';
import Header from './Header';
import BoxContainer from './BoxContainer'

export default class StylesPage extends Component {

  state = {
    styles: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/styles').then(res => res.json()).then(json => this.setState({
      styles: json.styles
    }))
  }

  render() {
    return (
      <div className="black">
        <Header />
        <br />
        <BoxContainer styles={this.state.styles}/>
      </div>
    )
  }
}
