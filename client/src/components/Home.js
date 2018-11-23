import React, { Component } from 'react'
import styled from 'styled-components'


class Home extends Component {
  render() {
    return(
      <section className={this.props.className}>
        <p className='homepage-site-desc'>
          Hello and welcome to my site!
          <br />
          <br />
          The motivation for buidling this site was to learn React,
          as well as host my projects directly and provide links to other things I’ve built.
          I’ve got lots of ideas, so there’s plenty more to come;
          all will be continually added on this site as they come into fruition.
         </p>
      </section>
    )
  }
}


const StyledHome = styled(Home)`
  box-sizing: border-box;
  font-family: lato;

  .homepage-site-desc {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1.4em;
    max-width: 480px;
  }
`


export default StyledHome
