import React from 'react'

export default class Expando extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.flipOpen = this.flipOpen.bind(this)
  }
  flipOpen() {
    console.log(this.state)
    this.setState(prevState => ({ open: !prevState.open }))
  }
  render() {
    return (
      <React.Fragment>
        <div onClick={this.flipOpen}>{this.props.clicker}</div>
        <div className={this.state.open ? 'collapse show' : 'collapse'}>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}
