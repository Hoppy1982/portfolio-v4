import React, { Component } from 'react'
import styled from 'styled-components'
import commonStyles from '../../../common-styles'

function ToDoProjectDesc(props) {
  return <div className={props.className}>
    <article>
      <h4>Project Desciption</h4>
      <p>
        I started this project with the objective of learning mySql and the MVC
        pattern. Following the principal of keeping things simple there's no login
        in / auth at the moment.
      </p>
      <p>
        The glaring consequence of this is that it's a to do list for the entirity
        of planet Earth at present where anybody can come along and edit it.
      </p>
      <p>
        Future plans include adding some kind of login. I added in fields for
        priority and completion with the intention of being able to sort and
        filter by them. That's also still to implement. I'd also like to add in
        custom categories later.
      </p>

      <h4>How It Works</h4>
      <p>
        The apps got it's own express server which handles URL requests based on
        user selections. Depending on the request type it goes through a bit of
        validation before a query string is passed to mysql.
      </p>
      <p>
        The response object
        is used by the front end to render. The reponse is an array of ToDo / Task
        objects. Array.map() is used in dynamically generate a react component
        for each array element.
      </p>
    </article>
  </div>
}


const StyledToDoProjectDesc = styled(ToDoProjectDesc)`
  //--------------------------------
  //Mobile or small window (default)

  font-size: 16px;
  margin-top: 1.5em;

  article {
    margin: ${commonStyles.sideMarginOne};
    border: solid lightgrey 2px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px #575859;
    background-color: #fff;
  }

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

  //--------------------------------
  //Desktop & not small window

  @media only screen
    and (min-device-width: 1200px)
    and (min-width: 1200px) {
      flex: 1 1 400px;

      margin-top: 72px;
    }
`

export default StyledToDoProjectDesc
