import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewItem: 0}

  getReview = reviewsList => {
    const {activeReviewItem} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewItem
    ]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="img" />
        <p className="name">{username}</p>
        <p className="comp-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewItem} = this.state
    if (activeReviewItem > 0) {
      this.setState(prevState => ({
        activeReviewItem: prevState.activeReviewItem - 1,
      }))
    }
  }

  onRight = () => {
    const {activeReviewItem} = this.state
    const {reviewsList} = this.props
    if (activeReviewItem < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewItem: prevState.activeReviewItem + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewItem} = this.state
    console.log(activeReviewItem)

    return (
      <div className="bg-container">
        <button
          type="button"
          className="button"
          onClick={this.onLeft}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-icon"
          />
        </button>

        {this.getReview(reviewsList)}

        <button
          type="button"
          className="button"
          onClick={this.onRight}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow-icon"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
