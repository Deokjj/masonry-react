import React from 'react';
import './App.css';
import Dummy from 'dummyjs';

class Item extends React.Component {
  componentDidMount() {
    const height = this.props.imageSize.slice(-3);
    this.setState({height: height + 37});
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

class App extends React.Component {
  componentDidMount() {
    import('./mansonry');
  }

  render () {
    return (
      <div className="masonry">
        <Item imageSize="280x400"/>
        <Item imageSize="280x300"/>
      </div>
    );
  }
}

export default App;
