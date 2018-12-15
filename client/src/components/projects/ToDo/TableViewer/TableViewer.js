import React, { Component } from 'react'
import styled from 'styled-components'
import NoTableSelected from './NoTableSelected/NoTableSelected'
import RenderRawTable from './RenderRawTable/RenderRawTable'
import TableSelect from './TableSelect/TableSelect'

class TableViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base_url: 'empty',
      tableName: '',
      rows: []
    }
    this.getTableRows = this.getTableRows.bind(this)
    this.handleTableSelect = this.handleTableSelect.bind(this)
  }


  componentDidMount() {
    if (process.env.NODE_ENV == 'development') {
      this.setState({base_url: `http://localhost:3001/`})
    }
    if (process.env.NODE_ENV == 'production') {
      this.setState({base_url: 'https://www.todo-app.markhopcraft.co.uk/'})
    }
    console.log(`base_url: ${this.state.base_url}`)//seems setState is async??
  }



  getTableRows(tableName) {
    const OPTIONS = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }


    fetch(`${this.state.base_url}api/table/${tableName}/`, OPTIONS)
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState({
          tableName: json.tableName,
          rows: json.rows
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  handleTableSelect(event) {
    if (event.target.value === '') {
      this.setState({
        rows: [],
        tableName: ''
      })
    } else if (event.target.value !== '') {
      this.getTableRows(event.target.value)
    }
  }


  render() {
    let componentToDisplay

    if (this.state.tableName === '') {
       componentToDisplay = <NoTableSelected />
    } else {
       componentToDisplay = <RenderRawTable tableName={this.state.tableName} rows={this.state.rows}/>
    }

    return(
      <div className={this.props.className}>
        <div className='tableViewerUpperSection'>
          <h1>Raw Table Viewer</h1>
          <TableSelect handleSelect={this.handleTableSelect} value={this.state.tableName}/>
        </div>
        {componentToDisplay}
      </div>
    )
  }
}



const StyledTableViewer = styled(TableViewer)`
  box-sizing: border-box;
  width: 96%;
  max-width: 800px;
  margin-top: 0.5em;

  display: flex;
  flex-direction: column;

  .tableViewerUpperSection {
    border: solid black 3px;
    border-top-left-radius: 0.5em;
    height: 24px;

    display: flex;
    align-items: stretch;
    justify-content: flex-end;
  }

  h1 {
    flex-basis: 600px;
    text-align: center;
    font-size: 16px;
  }
`


export default StyledTableViewer
