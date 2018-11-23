import React, { Component } from 'react'
import styled from 'styled-components'
import thumbnailCodingRef from '../images/site-coding-reference.png'
import thumbnailSimon from '../images/simon-link.png'
import thumbnail2DCarousel from '../images/2d-carousel-link.png'
import thumbnailCalc from '../images/calculator-link.png'


class Sites extends Component {
  render() {
    return(
      <section className={this.props.className}>

        <div className='ext-site'>
          <img className='ext-site__img' src={thumbnailCodingRef}></img>
          <p className='ext-site__desc'>
            <strong>Coding Reference: </strong>
            This site is for personal coding reference;
            I aim to record some things as I am learning in my own words to later refer to.
            It’s an easily navigable site for quick reference to regularly used items.
          </p>
          {/*<a className='ext-site__link' href='https://hoppy1982.github.io/learning-record/'>..visit site..</a>*/}
          <a className='ext-site__link' href='https://www.learning-record.markhopcraft.co.uk/'>..visit site..</a>
        </div>

        <div className='ext-site'>
          <img className='ext-site__img' src={thumbnailSimon}></img>
          <p className='ext-site__desc'>
            <strong>Simon Game: </strong>
            This was one of the first projects when I started learning to code in 2016
            from working through the frontend cert of freeCodeCamp.
          </p>
          <a className='ext-site__link' href='https://codepen.io/Hoppington/pen/vxqEeq'>..visit site..</a>
        </div>

        <div className='ext-site'>
          <img className='ext-site__img' src={thumbnail2DCarousel}></img>
          <p className='ext-site__desc'>
            <strong>2D Carousel: </strong>
            This an idea for a kind of carousel that worked in 2 dimensions.
            It works by destroying and remaking elements as you scroll. I used it
            on an older version of my portfolio site to make a nav menu with categories
            left to right with links vertically inside each.
          </p>
          <a className='ext-site__link' href='https://codepen.io/Hoppington/pen/yjjYMK'>..visit site..</a>
        </div>

        <div className='ext-site'>
          <img className='ext-site__img' src={thumbnailCalc}></img>
          <p className='ext-site__desc'>
            <strong>Calculator: </strong>
            Another freeCodeCamp project from a couple of years ago. On this one I was trying to
            get as close to the look of the example project without looking at the source css.
          </p>
          <a className='ext-site__link' href='https://codepen.io/Hoppington/pen/gmzpzj'>..visit site..</a>
        </div>

      </section>
    )
  }
}


const StyledSites = styled(Sites)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .ext-site {
    box-sizing: border-box;
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;
    border: solid #222 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .ext-site__img {
    box-sizing: border-box;
    width: 100%;
    flex: 1 1 auto;
  }

  .ext-site__desc {
    width: 100%;
    padding: 1em;
    text-align: center;
    flex: 1 1 auto;
  }

  .ext-site__link {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #222;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    transition: 2.0s;
    color: #fff;
    text-decoration: none;
    font-size: 2em;
    text-align: center;
    padding-top: 2em;
  }
  .ext-site__link:hover {
    opacity: 0.9;
  }

  /*sites component media queries*/
  @media only screen and (min-width: 320px) {
    .ext-site {
      width: 320px;
    }
  }

  @media only screen and (min-width: 640px) {
    .ext-site{
      flex-direction: row;
      height: 320px;
      width: 640px;
    }
    .ext-site__img {
      width: 308px;
      height: 304px;
    }
    .ext-site__desc {
      width: 320px;
    }
    .ext-site__link {
    }
  }
`


export default StyledSites
