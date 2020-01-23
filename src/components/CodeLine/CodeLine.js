import React from 'react';
import './CodeLine.scss'

class CodeLine extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.onLineSelect(this.props.index)} className={`code-line ${this.props.link ? 'link' : null}`}>
        {this.props.children}
        {this.props.link && <div className="info-icon">
          <b>i</b>
        </div>}
      </div>
    )
  }
}

export default CodeLine;