import React from "react"
import PropTypes from "prop-types"
import { Redirect, Link } from 'react-router-dom'

class NewDvd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responseOk: false,
      dvdAttributes: {
        title: "",
        year: "",
        genre: "",
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/dvds.json',{
      method:'POST',
      headers: {
            "Content-Type": "application/json",
      },
      body: JSON.stringify({dvd:this.state.dvdAttributes})
    })
    .then((response)=>{
      this.setState({responseOk: true})
    })
  }
  handleChange = (event) => {
    const {dvdAttributes} = this.state
    dvdAttributes[event.target.name] = event.target.value
    this.setState({dvdAttributes: dvdAttributes})
  }
  render () {
    const { dvdAttributes, responseOk} = this.state

    return (
      <div>
        {responseOk &&
          <Redirect to='/dvds' />}
          <div>
            <h1>Add a New Dvd</h1>
            <form
            onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
              type='text'
              name='title'
              value={dvdAttributes.title}
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="year">Year</label>
              <input
              type='number'
              name='number'
              value={dvdAttributes.year}
              onChange={this.handleChange}
              />
              <br />
              <label htmlFor="genre">Genre</label>
              <input
              type='text'
              name='genre'
              value={dvdAttributes.genre}
              onChange={this.handleChange}
              />
              <br />
              <button type='submit'>Add</button>
            </form>
          </div>

        <Link to="dvds">Back</Link>
      </div>
    );
  }
}

export default NewDvd
