import React from 'react'
import DropdownBtn from 'patchkit-dropdown'


export default class DropdownSelectorBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: this.props.initValue
    }
  }

  onSelect(value) {
    this.setState({ currentValue: value })
    if (this.props.onSelect)
      this.props.onSelect(value)
  }

  render() {
    const currentValue = this.state.currentValue
    
    const items = this.props.items.map(item => {
      return {
        label: <span><i className={'fa fa-'+(currentValue==item.value?'check-circle-o':'circle-thin')}/> {item.label}</span>,
        value: item.value
      }
    })

    return <DropdownBtn className={this.props.className} items={items} onSelect={this.onSelect.bind(this)}>
      {this.props.label}: {currentValue} <i className="fa fa-angle-down" />
    </DropdownBtn>
  }
}