import React from 'react'
import styles from './contact.module.css'
const Contact = () => {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>Have questions or feedback? We'd love to hear from you!</p>

      <div className={styles.form}>
        <label>Name:</label>
        <input className={styles.input} type="text"  />

        <labeel>Email:</labeel>
        <input className={styles.input} type="email"  />

        <label >Message:</label>
        <textarea className={styles.textarea}></textarea>

        <button className={styles.btn} type="submit">Submit</button>
      </div>
    </main>
  </div>
  )
}

export default Contact