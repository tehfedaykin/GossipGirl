import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'

const serena = require('../assets/img/jesswhite.jpg');
const dan = require('../assets/img/dylanbeattie.png');
const nate = require('../assets/img/jonskeet.jpg');
const blair = require('../assets/img/patriciaaas.jpg');

const NavItem = styled('div')`
  border-radius: 50%;
  background: #b8b365;
  margin: 2em auto;
  width: 50%;
  display: block;
  padding: 10px;
  text-align: center;

  .nav-link {
    display: inline-block;
    box-shadow: none;
    color: #000;
  }
  img.circle {
    border-radius: 50%;
    width: 75%;
    margin: 0 auto;
    display: block;
  }
 `

class LeftNav extends React.Component {

  render() {
    return (
      <div>
        <NavItem>
        <Link className="nav-link" to="/">
          <img className="circle" src={nate} alt="home" />
          {' '}home{' '}
        </Link>

        </NavItem>

        <NavItem>
          <Link className="nav-link" to="/posts">
            <img className="circle" src={dan} alt="posts" />
            {' '}posts{' '}
          </Link>
        </NavItem>

        <NavItem>
          <Link className="nav-link" to="/pics">
            <img className="circle" src={blair} alt="pics" />
            {' '}pics{' '}
          </Link>
        </NavItem>

        <NavItem>
          <Link className="nav-link" to="/cast">
            <img className="circle" src={serena} alt="cast" />
            {' '}cast{' '}
          </Link>
        </NavItem>
      </div>
    )
  }
}

export default LeftNav
