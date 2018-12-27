import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../common-styles'


function ProjectsDesc(props) {
  return <div className={props.className}>
    <article>
      <p>
        These are the projects I've so far either created or refactored into
        React.
      </p>
      <p>
        ParticleAlphabet & EnergyData were made before I started learning
        React and have been moved through several iterations of my site.
      </p>
      <p>
        This used to cause me a lot of headaches but it's got easier as I've
        switched to using React with Styled components.
      </p>
      <p>
        Some of the styling still has work to do, I've found with styled
        components I can remove alot of the css classes in favour of just using
        element selectors one deep inside the parent.
      </p>
      <p>
        I think this helps the JSX look a lot clearer and it saves time
        obsessing over the best names for css classes.
      </p>
    </article>
  </div>
}

const StyledProjectsDesc = styled(ProjectsDesc)`
  ${commonStyles.defaultStyles}
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;

  font-size: 16px;
  width: 100%;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 2em;
  border-top: solid ${commonStyles.colorOne} 8px;
  background-color: #eaea79;

  article {
    margin: ${commonStyles.sideMarginOne};
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: #fff;
  }

  p {
    margin: ${commonStyles.sideMarginOne};
    text-align: left;
    font-size: calc(1.1em + 0.5vw);
  }
`

export default StyledProjectsDesc
