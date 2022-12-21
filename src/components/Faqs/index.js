import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {
    isActive: false,
    activeId: null,
  }

  clickBtn = id => {
    this.setState(prevState => ({activeId: id, isActive: !prevState.isActive}))
  }

  render() {
    const {faqsList} = this.props
    const {activeId} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="ul-list">
            {faqsList.map(eachValue => (
              <FaqItem
                listItem={eachValue}
                key={eachValue.id}
                state={this.state}
                activeId={activeId}
                clickBtn={this.clickBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
