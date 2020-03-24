import React, { useState } from 'react';
import CodeLine from '../CodeLine/CodeLine';
import AccordionHeader from '../AccordionHeader/AccordionHeader';
import AccordionBody from '../AccordionBody/AccordionBody';
// import LineInfo from '../CodeLine/CodeLine';
import './Page.scss';

const Page = () => {

  const [expandHypCont1, setExpandHypCont1] = useState(false);
  const [showBody1, setShowBody1] = useState(false);
  const [selectedLineIndex, setSelectedLineIndex] = useState(-1);
  const [showVariablesContent, setShowVariablesContent] = useState(true);

  const expandHyperContent = () => {
    setShowBody1(!showBody1);
  }

  const expandVariableContent = () => {
    setShowVariablesContent(!showVariablesContent)
  }

  const onLineSelect = (index) => {
    setSelectedLineIndex(index)
  }

  const renderInfo = (lineIndex) => {
    switch (lineIndex) {
      case 1:
        return (
          <div className="line-info">
            The const keyword creates a <span className="highlighted" onClick={expandHyperContent}>read-only</span> reference to a value.
          </div>
          /* <div className="line-info">
            A <b onClick={this.expandHyperContent} style={{ color: '#15aabf' }}>read-only</b> value is a value that once asigned cannot be changed later on.
            {'If you try to re-asign it it will throw erros:'}<br /><br />
            <b style={{ color: '#15aabf' }}>Example:</b> <br />
            {'const a = 0;'}<br />
            {'a = 1;'}<span style={{ color: 'brown' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//  this will throw an error.</span>
            </div>     */
        )
      case 2:
        return (
          <div className="line-info">
            <span className="highlighted" onClick={expandHyperContent}>let</span> is used to declare variables that allow you to change their value later on.
          </div>
        )
      case 3:
        return (
          <div className="line-info">
            {'since you declared this variable with let, you can re-asign its value any time you want'}
          </div>
        )
      case 4:
        return (
          <div className="line-info">
            {'console.log(variable) prints out the value the the variable pass inside the parentheses'}
          </div>
        )
    }
  }

  return (
    <div className="page">
      <AccordionHeader toggleFunction={expandVariableContent} display={expandHypCont1}>
        <div class="header-container">
          Variables:
          </div>
      </AccordionHeader>
      <AccordionBody display={showVariablesContent} >
        <div class="grid-container">
          <div class="grid-item general-info detail-container">
            You can think of a variable as a container in memory where you can store a value.
            </div>
          <div class="grid-item">
            <CodeLine onLineSelect={onLineSelect} index={1} link>{'let name = "Jose";'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={2} link>{'const edad = 36;'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={3} link>{'edad = 36 + 5;'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={3} link>{'for (let i = 0; i< 100; i++)'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={4} link>{'console.log(edad);'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={4} link>{'edad = 18;'}</CodeLine>
            <CodeLine onLineSelect={onLineSelect} index={4} link>{'test line;'}</CodeLine>

            <br />
          </div>
          <div class="grid-item detail-container">
            {renderInfo(selectedLineIndex)}
          </div>
        </div>
      </AccordionBody>

    </div>
  )
}

export default Page;