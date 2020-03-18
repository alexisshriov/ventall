import React from 'react';
import AccordionHeader from '../AccordionHeader/AccordionHeader';
import AccordionBody from '../AccordionBody/AccordionBody';
import Line from '../Line/Line';
import HypCont from '../HyperContent/HyperContent';
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
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 0px' }}>
            <pre>
            {/* <h2>For Loop:</h2> */}
              <div>
              {<Line offset={5} length={32} display={this.state.expandHypCont1} />}
                <HypCont expand={this.expandHyperContent}>const</HypCont> counter = 10;<br /><br />
                <Line offset={3} length={34} />
                <HypCont>for</HypCont>{'(let i = 0; i< 10; i++)'}<br />
                {'{'}<br />
                {'  console.log("test")'}<br />
                {'}'}<br />
              </div>
            </pre>
          </div>
            <div>
              <div>
              <AccordionHeader toggleFunction={this.onClick} display={this.state.expandHypCont1}>
                The <b style={{ color: 'blue' }}>const</b> keyword creates a <b style={{ color: 'green' }} onClick={this.onClick}>read-only</b> reference to a value.  
              </AccordionHeader>
              <AccordionBody display={this.state.showBody1 && this.state.expandHypCont1} >
                  A <b style={{ color: 'green' }}>read-only</b> value is a value that once asigned cannot be changed later on.
                  {'If you try to re-asign it it will throw erros:'}<br /><br />
                  <b style={{ color: 'green' }}>Example:</b> <br />
                  {'const a = 0;'}<br />
                  {'a = 1;'}<span style={{ color: 'brown' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//  this will throw an error.</span>
              </AccordionBody>
              </div>        
            </div>
          </div>

         
        </div>
      // <Accordion defaultActiveKey="0">
      //   <Card>
      //     <Card.Header>
      //       <CustomToggle eventKey="0">Click me!</CustomToggle>
      //     </Card.Header>
      //     <Accordion.Collapse eventKey="0">
      //       <Card.Body>Hello! I'm the body</Card.Body>
      //     </Accordion.Collapse>
      //   </Card>
      //   <Card>
      //     <Card.Header>
      //       <CustomToggle eventKey="1">Click me!</CustomToggle>
      //     </Card.Header>
      //     <Accordion.Collapse eventKey="1">
      //       <Card.Body>Hello! I'm another body</Card.Body>
      //     </Accordion.Collapse>
      //   </Card>
      // </Accordion>
    )
  }
}

export default MainScreen;