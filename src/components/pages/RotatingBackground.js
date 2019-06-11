import React, { Component } from 'react';

class RotatingBackground extends Component {
  constructor(props) {
    super(props);
    this.backgrounds = this.props.backgrounds;
    this.state = {
      backgroundIndex: 0
    };
    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.changeBackground, this.props.animDuration * 5000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeBackground() {
    this.setState(
      function({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length;
        return { backgroundIndex: nextBackgroundIndex };
      },
      function() {
        this.timeout = setTimeout(this.changeBackground, this.props.animDuration * 5000);
      }
    );
  }

  render() {
    return (
      <img
        className="ui bordered image"
        src={this.backgrounds[this.state.backgroundIndex]}
        alt={this.backgrounds[this.state.backgroundIndex]}
        style={{ height: '90vh', width: '100%' }}
      />
    );
  }
}
export default RotatingBackground;
/* <div className="ui fluid image" style={{ height: '100vh', width: '100%' }}></div> */
