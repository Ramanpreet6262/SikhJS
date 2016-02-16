import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nightMode: false
    };
  }
  render () {
    return (
      <nav className = "navbar navbar-default navbar-fixed-bottom" id = "menuWrapper">
        <div className = "container-fluid">
          <div className = "navbar-header">
            <button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#main-menu" aria-expanded = "false">
              <span className = "sr-only">Toggle navigation</span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
              <span className = "icon-bar"></span>
            </button>
          </div>
          <div className = "collapse navbar-collapse" id = "main-menu">
            <ul className = "nav navbar-nav">
              <li><Link to={`/`} style = {{fontFamily: 'gurmukhi_heavy'}} >Ç</Link></li>
              <li><Link to={`/about`}> About </Link></li>
              <li><Link to={`/calendar`}> Calendar </Link></li>
              <li><Link to={`/sggs`}> Sri Guru Granth Sahib </Link></li>
              <li><Link to={`/nitnem`}> Nitnem </Link></li>
              <li><Link to={`/shabads`}> Shabads </Link></li>
            </ul>
            <form className = "navbar-form navbar-right form-inline">
              <input onChange = {(e) => this.updateFontSize(e)} id = "fontChanger" type = "range" name = "font-size" min = "1" max = "10" step = "0.1"/>
            </form>
            <ul className ="nav navbar-nav navbar-right">
              <li onClick={e => { this.toggleNightMode(e); return false }}>
                <a role="button">
                  <span className = "glyphicon glyphicon-adjust"></span> Night Mode
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  toggleNightMode (e) {
    //TODO: Handle this React way
    if (this.state.nightMode) {
      e.currentTarget.classList.remove('night-mode');
      document.getElementById('baaniWrapper').classList.remove('night-mode');
    } else {
      e.currentTarget.classList.add('night-mode');
      document.getElementById('baaniWrapper').classList.add('night-mode');
    }
    this.setState({
      nightMode : !this.state.nightMode
    });
  }
  updateFontSize (e) {
    document.getElementById('baaniWrapper').style.fontSize = ((35 * e.target.value) + '%');
  }
}
