import './index.css'

const FaqItem = props => {
  const {listItem, state, clickBtn, activeId} = props
  const {id, questionText, answerText} = listItem
  let isTrue = false
  if (activeId === id) {
    const {isActive} = state
    isTrue = isActive
  }
  const imgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isTrue ? 'minus' : 'plus'
  const btnClick = () => {
    clickBtn(id)
  }
  return (
    <li className="faq-item" key={id}>
      <div className="first-div">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={btnClick}>
          <img src={imgUrl} className="image" alt={altText} />
        </button>
      </div>
      {isTrue && (
        <>
          <hr />
          <p className="answer">{answerText}</p>
        </>
      )}
    </li>
  )
}
export default FaqItem
