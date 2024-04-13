import React from 'react';
import styles from './page.module.css'
const Login = () => {
  return (
    <div style={{height:'100vh'}} className='flex justify-center items-center'>
      <div className={styles.main}>
        <div className={`w-3/5 bg-gray-500 ${styles.left}`}>
          <div className={`${styles.content}`}>
                 <h2 className='pt-1 text-center text-2xl'>Welcome Back</h2>
                 <button className={`mt-4 ml-2  ${styles.btn}`}>Login With Google</button>
          </div>
        </div>
        <div className={`w-3/5  ${styles.left}`}>
          <img className={styles.img} src="./sign.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login;