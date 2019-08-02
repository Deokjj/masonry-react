import React, { Component } from 'react'

export class MasonryItem extends Component {
  render() {
    return <></>;
  }
}

export class Masonry extends Component {
  render() {
    const style = {margin: 16, display: 'grid', gridGap: 10, gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: 0};
    return (
      <div style={style}>{this.props.children}</div>
    )
  }
}
