import React from 'react';
import Page from '../Page/Page';
import './MainScreen.css';
// import { CustomToggle, Accordion, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class MainScreen extends React.Component {
  state = {
    showBody1: false,
    expandHypCont1: false
  }

  onClick = () => {
    this.setState({showBody1: !this.state.showBody1});
  }

  expandHyperContent = () => {
    this.setState({expandHypCont1: !this.state.expandHypCont1})
  }

  render() {
    return (
      <div className="main-screen">
        <Page />     
      </div>
    )
  }
}

export default MainScreen;