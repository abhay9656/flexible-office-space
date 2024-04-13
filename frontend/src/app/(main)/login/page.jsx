import React from 'react';
import styles from './page.module.css'
const Login = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="flex justify-center items-center"
    >
      <div className={styles.main}>
        <div className={`w-3/5 ${styles.left}`}>
          <div className={styles.container}>
            <h1 style={{ textAlign: "center",fontSize:28 }}>Login Page</h1>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <button className={styles.button}>Login</button>
          </div>
        </div>
        <div className={`w-3/5  ${styles.left}`}>
          <img className={styles.img} src="./sign.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;