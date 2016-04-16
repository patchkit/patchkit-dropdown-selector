import React from 'react'
import DropdownSelectorBtn from './index'

const ITEMS = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 }
]

export default class DropdownSelectorDemo extends React.Component {
  render() {
    const onSelect = o => console.log('selected', o)
    return <div>
      <h1>patchkit-dropdown-selector</h1>
      <section className="demo-dropdown-selector">
        <header>&lt;DropdownSelectorBtn label="Current" initValue=1 items="..."&gt;</header>
        <div className="content" style={{minHeight: '100px'}}>
          <DropdownSelectorBtn className="btn highlighted" items={ITEMS} label="Current" initValue={1} onSelect={onSelect} />
        </div>
      </section>
    </div>
  }
}