import React from 'react';
import './App.css';
import Dummy from 'dummyjs';

class Item extends React.Component {
  render () {
    const {imageSize,cardHeight} = this.props;
    const gridRowGap = 10, gridAutoRows = 0;
    const rowSpan = Math.ceil((parseInt(cardHeight) + gridRowGap) / (gridAutoRows + gridRowGap));
    return (
    <div className="item" style={{'gridRowEnd' : `span ${rowSpan}`}}> 
      <img className="image" src={Dummy.img(imageSize)} alt="masonry item img placeholder"/>
      <p>{Dummy.text(4)}</p>
    </div>
    );
  }
}

class Masonry extends React.Component {
  render () {
    return <div className="masonry">{this.props.children}</div>
  }
}

class App extends React.Component {

  render () {
    return (
      <Masonry>
        <Item ref imageSize="280x400" cardHeight='480'/>
        <Item imageSize="280x300" cardHeight='380'/>
        <Item imageSize="280x200" cardHeight='280'/>
        <Item imageSize="200x100" cardHeight='180'/>
        <Item imageSize="280x600" cardHeight='680'/>
        <Item imageSize="280x50" cardHeight='130'/>
        <Item imageSize="280x300" cardHeight='380'/>
        <Item imageSize="280x50" cardHeight='130'/>
        <Item imageSize="280x50" cardHeight='130'/>
      </Masonry>
    );
  }
}

export default App;
