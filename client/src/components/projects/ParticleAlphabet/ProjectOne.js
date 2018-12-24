import React, { Component } from 'react'
import ParticleAlphabetOne from './ProjectOneParticleAlphabet'
import styled from 'styled-components'
import ParticleAlphabetProjectDesc from './ParticleAlphabetProjectDesc'
import CodeLink from '../../CodeLink'
import TechUsed from '../../TechUsed'
import commonStyles from '../../../common-styles'


class ProjectOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentOneTargetWord: 'PARTICLE ALPHABET',
      contentOneRenderWaypoints: false,
      contentOneRenderPaths: false,
      contentOneCanvasWidth: 100,
      contentOneCanvasHeight: 100
    }

    this.updateCanvasDimensions = this.updateCanvasDimensions.bind(this)
    this.contentOneHandleTargetWordChange = this.contentOneHandleTargetWordChange.bind(this)
    this.contentOneHandleToggleWP = this.contentOneHandleToggleWP.bind(this)
    this.contentOneHandleTogglePaths = this.contentOneHandleTogglePaths.bind(this)
  }


  contentOneHandleTargetWordChange(event) {
    let sanatizedStr = event.target.value.replace(/[^a-zA-Z\s]/gi, '').toUpperCase()
    this.setState({contentOneTargetWord: sanatizedStr})
  }


  contentOneHandleToggleWP() {
    this.setState({contentOneRenderWaypoints: !this.state.contentOneRenderWaypoints})
  }


  contentOneHandleTogglePaths() {
    this.setState({contentOneRenderPaths: ! this.state.contentOneRenderPaths})
  }


  componentDidMount() {
    this.updateCanvasDimensions();
    window.addEventListener('resize', this.updateCanvasDimensions);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCanvasDimensions);
  }


  updateCanvasDimensions() {
    let desiredWidth

    if(window.innerWidth <= 400) {
      desiredWidth  =  window.innerWidth * 0.9
    }

    if(window.innerWidth > 400) {
      desiredWidth  =  400
    }


    this.setState({
      contentOneCanvasWidth: desiredWidth,
      contentOneCanvasHeight: desiredWidth
    })
  }


  render() {
    return(
      <div className={this.props.className}>

        <div className='title-and-link'>
          <h2>Particle Alphabet</h2>
          <CodeLink url='https://github.com/Hoppy1982/portfolio-v4/tree/master/client/src/components/projects/ParticleAlphabet' />
          <TechUsed techs={[
            {name: 'css', icon: 'css3', pack: 'fab', key: 0},
            {name: 'js', icon: 'js-square', pack: 'fab', key: 1},
            {name: 'react', icon: 'react', pack: 'fab', key: 2},
            {name: 'canvas', icon: 'html5', pack: 'fab', key: 3}
          ]} />
        </div>

        <ParticleAlphabetProjectDesc />
        {/*<div>
          <ParticleAlphabetOne />
          <ParticleAlphabetOneControls />
        </div>*/}

        <div className='projectLayout'>
          <div className='canvasAndDescription'>
            <div className='canvasAndControlsContainer'>
              <div className='canvasWrapper'>
                <ParticleAlphabetOne
                  canvasWidth={this.state.contentOneCanvasWidth}
                  canvasHeight={this.state.contentOneCanvasHeight}
                  targetWord={this.state.contentOneTargetWord}
                  renderWaypoints={this.state.contentOneRenderWaypoints}
                  renderPaths={this.state.contentOneRenderPaths}
                />
              </div>

              <div className='controls'>
                <div className='controls__inputContainer'>
                  <div className='controls__inputDesc'>Type in the box:</div>
                  <input className='controls__input' type="text" value={this.state.value} onChange={this.contentOneHandleTargetWordChange} className='control'></input>
                </div>
                <div className='controls__buttonsContainer'>
                  <button onClick={this.contentOneHandleToggleWP} className='controls__button'>Toggle Waypoints</button>
                  <button onClick={this.contentOneHandleTogglePaths} className='controls__button'>Toggle Paths</button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    )
  }
}


const StyledProjectOne = styled(ProjectOne)`
  ${commonStyles.defaultStyles}
  display: flex;
  align-items: center;
  flex-direction: column;
  //justify-content: space-around;

  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 2em;
  border-top: solid ${commonStyles.colorOne} 8px;
  background-color: #d6a228;

  .title-and-link {
    flex: 0 0 100%;
    padding-top: 1.5em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .projectLayout {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: lato;
  }

  .canvasAndControlsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 32px;
  }

  .canvasWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .controls {
    margin-top: 0.5em;
    border: solid #222 4px;
    width: 400px;
    background: #222;
  }

  .controls__inputContainer {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 1em;
  }

  .controls__inputDesc {
    font-weight: 600;
    background: #222;
    color: white;
    flex: 1 1 auto;
    width: 40%;
  }

  input {
    flex: 1 1 auto;
    width: 60%;
    height: 2em;
    font-size: 1.2em;
  }

  .controls__buttonsContainer {
    width: 100%;
  }

  .controls__button {
    height: 50px;
    width: 50%;
    font-weight: 800;
    font-size: 1em;
  }

  .controls__button:hover {
    background: #222;
    color: white;
    cursor: pointer;
  }

  .projectDescription {
    font-size: 16px;
    margin-top: 1.5em;

    h4 {
      margin: ${commonStyles.sideMarginOne};
      text-align: center;
      font-size: calc(1.1em + 0.5vw);
    }

    p {
      margin: ${commonStyles.sideMarginOne};
      text-align: left;
      font-size: calc(1.2em + 0.5vw);
    }
  }

  .canvasAndDescription {
    display: flex;
    flex-direction: column;
  }

  .articleHeading {
    text-align: center;
    padding: 0.5em;
  }
`


export default StyledProjectOne
