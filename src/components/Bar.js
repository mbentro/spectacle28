import React from 'react';
import Services from './pages/Services';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Bar extends React.Component {
  socialBar() {
    if (this.props.pos === 'top') {
      return (
        <div className="ui large secondary inverted pointing menu">
          <button className="ui inverted basic instagram icon button">
            <i className="instagram icon" />
          </button>
          <button className="ui inverted basic linkedin icon button">
            <i className="linkedin icon" />
          </button>
          <button className="ui inverted basic facebook icon button">
            <i className="facebook icon" />
          </button>
        </div>
      );
    }
    return <div />;
  }

  buttonBar() {
    console.log(this.props);
    const social = this.socialBar();
    const firstLink = `/${this.props.first}`;
    const secondLink = `/${this.props.second}`;
    const thirdLink = `/${this.props.third}`;
    const fourthLink = `/${this.props.fourth}`;
    console.log(firstLink);
    return (
      <BrowserRouter>
        <div className="ui large secondary inverted pointing menu">
          <Link to={firstLink} className="right item">
            {this.props.first}
          </Link>
          <Link to={secondLink} className="right item">
            {this.props.second}
          </Link>
          <Link to={thirdLink} className="right item">
            {this.props.third}
          </Link>
          <Link to={fourthLink} className="right item">
            {this.props.fourth}
          </Link>
          {social}
        </div>
      </BrowserRouter>
    );
  }

  render() {
    console.log(this.props);
    return <div>{this.buttonBar()}</div>;
  }
}

export default Bar;

/* <a className="right item">{this.props.first}</a> 
    <a className="item">{this.props.second}</a>
    <a className="item">{this.props.third}</a>
    <a className="item">{this.props.fourth}</a> */
