import React from 'react';
import './App.css';
import Dummy from 'dummyjs';

class Item extends React.Component {
  componentDidMount() {
  }
  render () {
    const {imageSize} = this.props;
    return (
    <div className="item"> 
      <img className="image" src={Dummy.img(imageSize)} alt="masonry item img placeholder"/>
      <p>{Dummy.text(4)}</p>
    </div>
    );
  }
}

class Masonry extends React.Component {
  componentDidMount() {
  }
  render () {
    return <div className="masonry">{this.props.children}</div>
  }
}

class App extends React.Component {
  componentDidMount() {
    import('./mansonry');
    // console.log(this.props.children);
  }

  render () {
    return (
      <Masonry>
        <Item ref imageSize="280x400"/>
        <Item imageSize="280x300"/>
      </Masonry>
    );
  }
}

export default App;
