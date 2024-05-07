'use client'
import React from 'react'
import styles from './contact.module.css'
import { useFormik } from 'formik'
const Contact = () => {

  const contact =useFormik({
    initialValues:{
      name:'',
      email:'',
      message:''
    },
    onSubmit:(values)=>{
      console.log(values);
    }
  })

  return (
    <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Contact<span className='text-blue-700'>Us</span></h1>
      <p className={styles.description}>Have questions or feedback? We'd love to hear from you!</p>
      <form action="" onSubmit={contact.handleSubmit}>
      <div className={styles.form}>
        <label>Name:</label>
        <input className={styles.input} id='name' type="text"  onChange={contact.handleChange}
        value={contact.values.name}/>

        <label>Email:</label>
        <input className={styles.input} id='email ' type="email" onChange={contact.handleChange}
          value={contact.values.email} />

        <label >Message:</label>
        <textarea id='message' className={styles.textarea } onChange={contact.handleChange}
        value={contact.values.message}></textarea>

        <button className={styles.btn} type="submit">Submit</button>
        
      </div>
      </form> 
    </main>
  </div>
  )
}

export default Contact