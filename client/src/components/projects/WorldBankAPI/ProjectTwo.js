import React, { Component } from 'react'
import ProjectTwoCharts from './ProjectTwoCharts'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'


class ProjectTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'https://api.worldbank.org/v2',
      showPercents: true, //should show absolute values when false
      allCountriesData: []
    }

    this.countries = [
      'GBR',
      'AUS'
    ]

    this.handleCountryOneChange = this.handleCountryOneChange.bind(this)
    this.handleTogglePercentAbsolute = this.handleTogglePercentAbsolute.bind(this)
  }

//----------------------------------------------------------------CUSTOM METHODS
  fetchData() {
    this.setState({allCountriesData: []})

    const promises = this.countries.map((country) => {
      return this.fetchCountryData(country)
    })

    Promise
      .all(promises)
      .then((allCountriesData) => {
        for(let i = 0; i < allCountriesData.length; i++) {
          this.setState(prevState => {
            return {allCountriesData: [...prevState.allCountriesData, allCountriesData[i]]}
          })
        }
      })
      //.then(() => console.log(this.state.allCountriesData))// dev whilst get EnergyProductionGraphs component working reet
  }


  fetchCountryData(country) {
    const populationPromise = this.fetchPopulation(country)
    const consumptionPromise = this.fetchConsumption(country)
    const percentCleanPromise = this.fetchPercentClean(country)//wind & solar
    const percentDirtyPromise = this.fetchPercentDirty(country)//oil, gas & coal
    const percentNuclearPromise = this.fetchPercentNuclear(country)
    const percentHydroPromise = this.fetchPercentHydro(country)
    const promises = [
      populationPromise,
      consumptionPromise,
      percentCleanPromise,
      percentDirtyPromise,
      percentNuclearPromise,
      percentHydroPromise
    ]

    return new Promise((resolve, reject) => {
      Promise
      .all(promises)
      .then(([popData, consumptionData, percentCleanData, percentDirtyData, percentNuclearData, percentHydroData]) => {
        return this.amalgamateData(popData, consumptionData, percentCleanData, percentDirtyData, percentNuclearData, percentHydroData)
      })
      .then((countryData) => {resolve(countryData)})
      .catch((err) => reject(err))
    })
  }


  amalgamateData(popData, consumptionData, percentCleanData, percentDirtyData, percentNuclearData, percentHydroData) {
    const amalgamatedData = popData.map((el, ind) => {
      let countryId = el.country.id
      let countryName = el.country.value
      let year = el.year
      let population = el.population
      let consumption = consumptionData[ind].consumptionPerCapita
      let percentClean = percentCleanData[ind].percentClean
      let percentDirty = percentDirtyData[ind].percentDirty
      let percentNuclear = percentNuclearData[ind].percentNuclear
      let percentHydro = percentHydroData[ind].percentHydro
      let totalPercentEnergy = percentClean + percentDirty + percentNuclear + percentHydro
      let totalEnergyUsed = population * consumption
      let totalClean = percentClean * totalEnergyUsed
      let totalDirty = percentDirty * totalEnergyUsed
      let totalNuclear = percentNuclear * totalEnergyUsed
      let totalHydro = percentHydro * totalEnergyUsed

      return {
        countryId: countryId,
        countryName: countryName,
        year: year,
        population: population,
        consumptionPerCapita: consumption,
        percentClean: percentClean,
        percentDirty: percentDirty,
        percentNuclear: percentNuclear,
        percentHydro: percentHydro,
        totalPercent: totalPercentEnergy,
        totalClean: totalClean,
        totalDirty: totalDirty,
        totalNuclear: totalNuclear,
        totalHydro: totalHydro,
        total: totalEnergyUsed
      }
    })

    return amalgamatedData
  }


  fetchPopulation(country) {
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/SP.POP.TOTL
    const series = 'SP.POP.TOTL'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, population: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(population => population)
  }


  fetchConsumption(country) {//energy consumption (kwh per capita)
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/EG.USE.ELEC.KH.PC
    const series = 'EG.USE.ELEC.KH.PC'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, consumptionPerCapita: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(consumption => consumption)
  }


  fetchPercentClean(country) {//energy production from renewable sources, excluding hydro (% of total)
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/EG.ELC.RNWX.ZS
    const series = 'EG.ELC.RNWX.ZS'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, percentClean: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(percentClean => percentClean)
  }


  fetchPercentDirty(country) {//energy production from oil, gas & coal (% of total)
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/EG.ELC.FOSL.ZS
    const series = 'EG.ELC.FOSL.ZS'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, percentDirty: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(percentDirty => percentDirty)
  }


  fetchPercentNuclear(country) {//energy production nuclear (% of total)
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/EG.ELC.NUCL.ZS
    const series = 'EG.ELC.NUCL.ZS'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, percentNuclear: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(percentNuclear => percentNuclear)
  }


  fetchPercentHydro(country) {//energy production hydro (% of total)
    //full url for dev http://api.worldbank.org/v2/countries/gbr/indicators/EG.ELC.HYRO.ZS
    const series = 'EG.ELC.HYRO.ZS'
    const baseUrl = this.state.baseUrl
    const url = `${baseUrl}/countries/${country}/indicators/${series}?format=json`

    return fetch(url)
    .then(res => {
      if(res.ok) {return res}
      throw new Error ('Network response not ok')
    })
    .then(res => res.json())
    .then(json => json[1])
    .then(allData => {
      return allData.map(el => {
        return {country: el.country, year: el.date, percentHydro: el.value}
      })
    })
    .catch(err => console.log(err))
    .then(percentHydro => percentHydro)
  }


  handleCountryOneChange(event) {
    let val = event.target.value
    this.countries[1] = val
    this.fetchData()
  }

  handleTogglePercentAbsolute() {
    this.setState(prevState => {
      return {showPercents: !prevState.showPercents}
    })
  }


//------------------------------------------------------------LIFE CYCLE METHODS
  componentDidMount() {
    this.fetchData()
  }


//----------------------------------------------------------------
  render() {
    return(
      <div className={this.props.className}>
        <h2>Energy Production Data From World Bank API</h2>

        <div className='projectArticlesAll'>
          <article className='projectArticle'>
            <h3 className='projectArticle__heading'>Project Desciption</h3>
            <p className='projectArticle__text'>
              This project combines data from a few different endpoints of the
              world bank API to show either energy production sources as a percentage
              or in absolute terms. I was trying to illustrate that while a greater
              of energy is being produced from clean sources that the total energy
              produced from fossil fuels might still be rising. Data for the UK is
              always shown, then you can select a second country to compare it to.
              I decided against including a vertical scale for the absolute values for
              two reasons, firstly I think the numbers are meaningless to most people and
              secondly I was trying to keep the chart as simple as possible as it's just
              made using simple css. The learning objective for me doing this was practice
              at using an API, not a graphics library. In hindsight, this is not the best way of
              displaying the data for energy production in absolute terms. Either I could
              have used a logarithmic scale or I think better yet, a pie chart of
              which it's area equated to energy amount produced. In that way you could still illustrate
              a comparision between the UK and somewhere else...although you'd need a slider for the year
              perhaps.

            </p>
          </article>

          <article className='projectArticle'>
            <h3 className='projectArticle__heading'>How it works</h3>
            <p className='projectArticle__text'>
              The world bank API has loads of good information but finding the specific
              data I wanted was a pain. I used several different fetch calls and then
              combined the responses. For example one fetch was used to get population
              data for each country, then another for energy consumption per capita.
              They were combined to get total energy usage per country. In total 6 separate
              fetch requests are made (consumption per capita, population, percentage energy produced
              from solar & wind combined, percentage from hydro, percentage from nuclear and percentage
              from fossil fuels). There must be some other energy sources, such as burning rubbish that
              I didn't account for so the percentage columns have a slight variation in height. That
              could be fixed by including an 'other sources' block when I get around to it.
              I used promise.all to harvest up all the different responses before doing the mathsy stuff.
            </p>
          </article>
        </div>

        <div className='ProjectTwoControlsLayoutContainer'>
          <section className='chartKey'>
            <div className='chartKey__element'>
              <div className='chartKey__colorBlock chartKey__colorBlock--clean'></div>
              <p className='chartKey__text'>Solar & Wind</p>
            </div>
            <div className='chartKey__element'>
              <div className='chartKey__colorBlock chartKey__colorBlock--hydro'></div>
              <p className='chartKey__text'>Hydro</p>
            </div>
            <div className='chartKey__element'>
              <div className='chartKey__colorBlock chartKey__colorBlock--nuclear'></div>
              <p className='chartKey__text'>Nuclear</p>
            </div>
            <div className='chartKey__element'>
              <div className='chartKey__colorBlock chartKey__colorBlock--dirty'></div>
              <p className='chartKey__text'>Fossil Fuels</p>
            </div>
          </section>

          <section className='projectTwoControls'>
            <div className='projectTwoControls__dropDown'>
              <div className='projectTwoControls__dropDownLabel'>Comparison Country</div>
              <select className='projectTwoControls__dropDownList' onChange={this.handleCountryOneChange}>
                <option value='AUS'>Australia</option>
                <option value='CHN'>China</option>
                <option value='DNK'>Denmark</option>
                <option value='DEU'>Germany</option>
                <option value='ISL'>Iceland</option>
                <option value='NLD'>Netherlands</option>
                <option value='NOR'>Norway</option>
                <option value='GBR'>UK</option>
                <option value='USA'>USA</option>
              </select>
            </div>
            <button className='projectTwoControls__togglePercentAbsolute' onClick={this.handleTogglePercentAbsolute}>
              Percent /<br></br>
              Absolute
            </button>
          </section>
        </div>

        <ProjectTwoCharts energyData={this.state.allCountriesData} showPercents={this.state.showPercents}/>

        <div className='stuffUsed'>
          <h4 className='stuffUsed__heading'>Stuff Used</h4>
          <ul className='stuffUsed__list'>
            <li>Html</li>
            <li>Css</li>
            <li>Javascript (lots of fetch & promises)</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    )
  }
}


const StyledProjectTwo = styled(ProjectTwo)`
  ${commonStyles.defaultStyles}

  width: 100%;
  margin-top: 2em;
  padding-top: 1em;
  padding-bottom: 2em;
  border-top: solid ${commonStyles.colorOne} 8px;
  background-color: #59c66d;

  h2 {
    padding-top: 1.5em;
    text-align: center;
  }

  .ProjectTwoControlsLayoutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 1em;
  }

  .chartKey {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
    margin-right: 1em;
    margin-left: 1em;
  }

  .chartKey__element {
    display: flex;
    flex-direction: row;
  }

  .chartKey__colorBlock {
    width: 1em;
    height: 1em;
    margin-right: 1em;
  }

  .chartKey__colorBlock--clean {
    background: #52af4f;
  }

  .chartKey__colorBlock--hydro {
    background: #364256;
  }

  .chartKey__colorBlock--nuclear {
    background: #af8346;
  }

  .chartKey__colorBlock--dirty {
    background: #683411;
  }

  .projectTwoControls {
    margin-top: 1em;
    margin-left: 1em;
    height: 60px;
    background: #222;
    border: solid #222 4px;
    border-top-right-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .projectTwoControls__dropDown {
    height: 100%;
    width: 120px;
  }

  .projectTwoControls__dropDownLabel {
    height: 50%;
    color: white;
    font-size: 0.8em;
    text-align: center;
    padding-top: 4px;
  }

  .projectTwoControls__dropDownList {
    height: 50%;
    width: 100%;
    font-size: 1.2em;
  }

  .projectTwoControls__togglePercentAbsolute {
    margin-left: 1em;
    padding-right: 0.3em;
    padding-left: 0.2em;
    padding-top: 0.1em;
    border-top-right-radius: 8px;
    font-size: 0.8em;
    font-weight: 600;
    color: #222;
    background-color: white;
  }

  .projectTwoControls__togglePercentAbsolute:focus {
    outline: 0;
  }

  .projectArticlesAll {

  }

  .projectArticle {
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;
  }

  .projectArticle__heading {
    text-align: center;
  }

  .projectArticle__text {
    max-width: 1200px;
    text-align: justify;
    margin: auto;
    margin-top: 1em;
    font-size: 1.2em;
  }

  .stuffUsed {
    margin: 1em;
  }

  .stuffUsed__heading {
    text-align: center;
  }

  .stuffUsed__list {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    list-style: none;
    font-weight: 600;
  }

  @media screen and (min-width: 480px) {
    .ProjectTwoControlsLayoutContainer {
      flex-direction: row;
    }
  }
`


export default StyledProjectTwo
