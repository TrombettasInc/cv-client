import React from 'react'
import styles from './MultiStep.module.css'
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { BsFillEmojiNeutralFill } from 'react-icons/bs'
import { BsFillEmojiFrownFill } from 'react-icons/bs'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className={styles['review-form']}>
        <div className={`${styles["form-control"]} ${styles["score-container"]}`}>
          <label className={styles['radio-container']}>
            <input
             type="radio" 
             value="unsatisfied" 
             name="review" 
             required
             checked={data.review === "unsatisfied"}
             onChange={(e)=>updateFieldHandler("review", e.target.value)}
              />
            <BsFillEmojiFrownFill />
            <p>unsatisfied</p>
          </label>
          <label className={styles['radio-container']}>
            <input 
            type="radio" 
            value="neutral" 
            name="review" 
            required
            checked={data.review === "neutral"}
             onChange={(e)=>updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiNeutralFill />
            <p>could be better</p>
          </label>
          <label className={styles['radio-container']}>
            <input type="radio" 
            value="satisfied" 
            name="review" 
            required 
            checked={data.review === "satisfied"}
            onChange={(e)=>updateFieldHandler("review", e.target.value)}
            />
            <BsFillEmojiSmileFill />
            <p>satisfied</p>
          </label>
          <label className={styles['radio-container']}>
            <input type="radio" 
            value="very satisfied" 
            name="review" 
            required
            checked={data.review === "very_satisfied"}
             onChange={(e)=>updateFieldHandler("review", e.target.value)}
             />
            <BsFillEmojiHeartEyesFill />
            <p>very satisfied</p>
          </label>

        </div>
        <div className={styles['form-control']}>
          <label htmlFor="comment">Comment</label>
          <textarea 
          name="comment" 
          id="comment"
          placeholder='tell us about your experience'
          required
          value={data.comment || ""}
          onChange={(e)=>updateFieldHandler("comment", e.target.value)}
            ></textarea>
        </div>
    </div>
  )
}

export default ReviewForm