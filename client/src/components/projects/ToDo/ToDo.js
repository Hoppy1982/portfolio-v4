import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'
import constants from '../../../constants'
import TasksView from './TasksView/TasksView'
import TasksNew from './TasksNew/TasksNew'
import TableViewer from './TableViewer/TableViewer'


class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tableName: '',
      rows: []
    }

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
    const OPTIONS = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    fetch(`${constants.BASE_URL}api/todo/`, OPTIONS)
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

  @media only screen
    and (min-device-width: 320px)
    and (max-device-width: 640px) {
      width: 100%;
      font-size: 3em;
    }
`


export default StyledToDo;
