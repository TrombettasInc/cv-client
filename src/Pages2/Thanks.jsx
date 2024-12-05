import React from 'react'
import styles from './MultiStep.module.css'
import { BsEmojiSmileFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { BsFillEmojiNeutralFill } from 'react-icons/bs'
import { BsFillEmojiFrownFill } from 'react-icons/bs'

const emojiData = {

  unsatisfied : <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />

}

const Thanks = ({data}) => {
  return (
    <div className={styles['Reviewthanks-container']}>
      <h2>Almost over..</h2>
      <p>Your opinion is very important, soon you will receive a 10% discount coupon for your next purchase</p>
     <p>To finish your review please click on the submit button</p>
     <h3>Here is your review summary,  {data.name} </h3>
     <p className={styles['review-data']}>
      <span>Satisfaction with the product:</span>
      {emojiData[data.review]}
     </p>
     <p className={styles['review-data']}>
      <span>Comments:</span> {data.comment}
     </p>
    </div>
  )
}

export default Thanks