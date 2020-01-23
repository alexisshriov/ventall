import React from 'react';
import './AccordionHeader.scss';

class AccordionHeader extends React.Component {

  handleClick = () => {
    const {toggleFunction} = this.props
    
    if(toggleFunction){
      toggleFunction()
    }
  }

  render() {
    return (
      <div onClick = {this.handleClick} className={`accordion-header ${this.props.display ? 'accordion-header-active' : null}`}>
        {/* <div className="content"> */}
          {this.props.children}
        {/* </div> */}
      </div>
    )
  }
}

export default AccordionHeader;