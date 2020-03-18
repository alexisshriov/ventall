import React from 'react';

import AccordionHeader from '../AccordionHeader/AccordionHeader';
import AccordionBody from '../AccordionBody/AccordionBody';
import './MainScreen.css';
// import { CustomToggle, Accordion, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class MainScreen extends React.Component {
  state = {
    showBody: false
  }

  onClick = () => {
    console.log('test')
    this.setState({showBody: !this.state.showBody});
  }

  render() {
    return (
        <div className="main-screen">
          <div style={{ display: 'flex' }}>
            <div style={{margin:  '0 30px'}}>
            <pre>
              <code>
                <b style={{ color: 'blue' }}>const</b> counter = 10;<br/><br/>
                {'for(let i = 0; i< 10; i++)'}<br/>
                {'{'}<br/>
                {'  console.log("test")'}<br/>
                {'}'}<br/>
              </code>
            </pre>
            </div>
            <div>
              <AccordionHeader toggleFunction={this.onClick}/>
              <AccordionBody display={this.state.showBody} />
              {/* <AccordionBody display={this.state.showBody} level = {3} /> */}
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