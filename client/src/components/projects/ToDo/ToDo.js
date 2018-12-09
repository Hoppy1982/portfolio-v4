import React, { Component } from 'react'
import styled from 'styled-components'
import TasksView from './TasksView/TasksView'
import TasksNew from './TasksNew/TasksNew'
import TableViewer from './TableViewer/TableViewer'
import commonStyles from '../../../common-styles'


class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableName: '',
      rows: []
    }

    this.BASEURL = `http://localhost:3001/`
    this.getData = this.getData.bind(this)
  }


  componentDidMount() {
    this.getData()
  }


  render() {
    return (
      <div className={this.props.className}>
        <TableViewer />
        <TasksNew getData={this.getData}/>
        <TasksView tableName ={this.state.tableName} rows={this.state.rows} getData={this.getData}/>
      </div>
    )
  }


  getData() {
    console.log('getData called..')

    const OPTIONS = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    fetch(`${this.BASEURL}api/todo/`, OPTIONS)
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


}


const StyledToDo = styled(ToDo)`
  ${commonStyles.defaultStyles}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  margin-top: 24px;
  color: #000;
  border: solid black 8px;
  border-top-left-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  @media only screen and (min-width: 480px) {
    max-width: 640px;
  }
`


export default StyledToDo;
