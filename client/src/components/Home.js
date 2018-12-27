import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../common-styles'


class Home extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <article>
          <p>
            Hello and welcome to my site.
            <br /><br />
            The motivation for building this site was to learn React & host my
            other projects.
            <br /><br />
            The site is hosted on Digital Ocean droplet. I chose that hosting solution as I
            wanted something fairly bare metal.
            <br /><br />
            I’ve set up subdomains for some of my projects which then run
            on their own small servers written in express.
            <br /><br />
            Nginx is set up as a reverse proxy and certbot was
            used to implement SSL with LetsEncrypt.
            <br /><br />
            I used PM2 to manage the backend processes. To update
            the web server I pull changes from a git repo and then rebuild on the server with webpack.
            <br /><br />
            I use
            shell commands on the droplet to avoid needing a desktop GUI to save system resources.
          </p>
        </article>
      </div>
    )
  }
}


const StyledHome = styled(Home)`
  ${commonStyles.defaultStyles}
  font-size: 16px;
  margin-top: 1.5em;

  article {
    margin: ${commonStyles.sideMarginOne};
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: ${commonStyles.colorOne};
    color: #fff;
  }

  p {
    margin: ${commonStyles.sideMarginOne};
    text-align: center;
    font-size: calc(1.2em + 0.5vw);
  }

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      flex: 1 1 100%;
      max-width: 1200px;
    }
`


export default StyledHome
