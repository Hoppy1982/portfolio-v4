import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Footer extends Component {
  render() {
    return(
      <footer className={this.props.className}>
        <a className='link' href='https://github.com/Hoppy1982'>
          <FontAwesomeIcon icon={['fab', 'github-square']} />
        </a>
      </footer>
    )
  }
}


const StyledFooter = styled(Footer)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #222;
  width: 100%;
  height: 3em;

  .link {
    font-size: 2em;
    font-family: lato;
    color: white;
    margin: 0.2em;
  }

  .link:visited {
    color: white;
  }

  .link:hover {
    color: #9cafce;
  }
`


export default StyledFooter

//<NavLink to='/' activeClassName='active' exact={true} className='navbar__link'>Home</NavLink>
