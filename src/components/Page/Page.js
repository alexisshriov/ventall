import React from 'react';
import CodeLine from '../CodeLine/CodeLine';
import AccordionHeader from '../AccordionHeader/AccordionHeader';
import AccordionBody from '../AccordionBody/AccordionBody';
import './Page.scss';

class Page extends React.Component {
  state = {
    expandHypCont1: true,
    showBody1: false,
    selectedLineIndex: -1 
  }

  expandHyperContent = () => {
    this.setState({ showBody1: !this.state.showBody1 })
  }

  onLineSelect = (index) => {
    this.setState({ selectedLineIndex: index });
  }

  renderInfo = (lineIndex) => {
    switch(lineIndex){
      case 1:
        return(
          <div>
            <AccordionHeader toggleFunction={this.onClick} display={this.state.expandHypCont1}>
              The const keyword creates a <b style={{ color: '#15aabf' }} onClick={this.expandHyperContent}>read-only</b> reference to a value.
            </AccordionHeader>
            <AccordionBody display={this.state.showBody1 && this.state.expandHypCont1} >
              A <b style={{ color: '#15aabf' }}>read-only</b> value is a value that once asigned cannot be changed later on.
              {'If you try to re-asign it it will throw erros:'}<br /><br />
              <b style={{ color: '#15aabf' }}>Example:</b> <br />
              {'const a = 0;'}<br />
              {'a = 1;'}<span style={{ color: 'brown' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//  this will throw an error.</span>
            </AccordionBody>
          </div>    
        )
        break;
      case 2: 
        return(
          <div>
             <AccordionHeader toggleFunction={this.onClick} display={this.state.expandHypCont1}>
              {'this is another explanation about  a secondary line'}
            </AccordionHeader>
          </div>
        )
        break;
    }
  }
  
  render() {
    return (
      <div className="page">
        <div class="grid-container">
          <div class="grid-item header-item">
            Variables:
          </div>
          <div class="grid-item info-item">
            You can think of a variable as a container in memory where you can put a value.
          </div>
          <div class="grid-item code-panel">
          <CodeLine onLineSelect={this.onLineSelect} index={1} link>{'let name = "Jose";'}</CodeLine>
          <CodeLine onLineSelect={this.onLineSelect} index={2} link>{'const edad = 36;'}</CodeLine>
            {/* <CodeLine onLineSelect={this.onLineSelect} index={1} link>{'const counter = 10;'}</CodeLine>
            <CodeLine onLineSelect={this.onLineSelect} index={2} link>{'for (let i = 0; i< 10; i++)'}</CodeLine>
            <CodeLine onLineSelect={this.onLineSelect} index={3}>{'{'}</CodeLine>
            <CodeLine onLineSelect={this.onLineSelect} index={4} link>&nbsp;&nbsp;{'console.log("test");'}</CodeLine>
            <CodeLine onLineSelect={this.onLineSelect} index={5}>{'}'}</CodeLine> */}
            <br />
          </div>
          <div class="grid-item details-panel">
            {this.renderInfo(this.state.selectedLineIndex)} 
          </div>
        </div>
      </div>
    )
  }
}

export default Page;