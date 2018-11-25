import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare
} from '@fortawesome/fontawesome-free-brands'
import styled from 'styled-components'


class Footer extends Component {
  render() {
    return(
      <footer className={this.props.className}>
        <a className='link' href='https://github.com/Hoppy1982'>
          <FontAwesomeIcon className='link__icon' icon={faGithubSquare} />
        </a>
        <a className='link' href='https://twitter.com/Markhopcraft'>
          <FontAwesomeIcon className='link__icon' icon={faTwitterSquare} />
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
