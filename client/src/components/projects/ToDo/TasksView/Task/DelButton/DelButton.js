import React, { Component } from 'react'
import styled from 'styled-components'
import constants from '../../../../../../constants'


class DelButton extends Component {
  constructor(props) {
    super(props)
    this.rowId = this.props.rowId
    this.getData = this.props.getData
    this.state = {}
    this.handleDel = this.handleDel.bind(this)
  }

  handleDel(event) {
    console.log(`deleting ${this.rowId}`)
    const delData = {rowId: this.rowId}
    const OPTIONS = {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(delData)
    }

    fetch(`${constants.BASE_URL}api/todo/`, OPTIONS)
      .then(res => {
        return res.json()
      })
      .then(json => {
        console.log(json.msg)
        this.getData()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <button className={this.props.className} onClick={this.handleDel}>Delete</button>
    )
  }
}





const StyledDelButton = styled(DelButton)`
  align-self: flex-start;
  border: solid black 3px;
  border-top: none;
  width: 100px;
  background-color: #d83636;
  font-weight: 700;
  text-align: center;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  &:hover {
    background-color: #a31f1f;
    cursor: pointer;
  }
`;

export default StyledDelButton
