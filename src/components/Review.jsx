import React from 'react'

import formCircle from '../assets/review-middle-ellipse.svg'
import lightBulb from '../assets/review-star.svg'
import rightArrow from '../assets/review-arrow.svg'
import lowerCircle from '../assets/review-lower-ellipse.svg'
import reviewRedCircle from '../assets/review-red-ellipse.svg'
import reviewBlueCirce from '../assets/review-blue-ellipse.svg'

const Review = () => (
  <div className='welcome__container'>
    <div className='welcome-form__wrapper'>
      <img src={reviewRedCircle} alt='Red Circle' className='review-red-circle' />
      <img src={reviewBlueCirce} alt='Blue Circle' className='review-blue-circle' />
      <div className='form-bulb__wrapper'>
        <div className='review-image__wrapper'>
          <img src={lightBulb} alt='Light Bulb' className='review__star' />
          <img src={formCircle} alt='Form Circle' className='review-mid__circle' />
        </div>
        <div className='review-text__wrapper'>
          <span className='review__text'>Review Books</span>
          <span className='review-msg__text'>Create your account to get started. After that, you can share books and make friends.</span>
        </div>
        <div className='dot__wrapper'>
          <span className='dot'></span>
          <span className='dot active'></span>
          <span className='dot'></span>
        </div>
        <button className='review-btn'>
          <img src={rightArrow} alt='Right Arrow' />
        </button>
        <img src={lowerCircle} alt='Lower Circle' className='lowerCircle' />
        <span className='review__link'><a href='#/skip-intro' className='link__text'>Skip Intro</a></span>
      </div>
    </div>
  </div>
)

export default Review
