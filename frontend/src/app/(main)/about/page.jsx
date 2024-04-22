import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <div>
      <>
  <header className={`bg-blue-700 ${styles.header}`}>
    <h1>About Us</h1>
  </header>
  <main className={styles.main}>
    <section>
      <h2  className='text-3xl font-bold mb-2'>Our Company</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        volutpat magna. Nam eget dui eu ex malesuada finibus. Nullam rutrum
        turpis vitae ante fringilla, et fermentum mi ultrices. Fusce dignissim
        ligula quis justo euismod, sit amet mollis lectus convallis. Sed aliquet
        eros et sapien suscipit, vel sollicitudin velit semper. Vivamus
        ullamcorper risus in eros vestibulum ultrices.
      </p>
    </section>
    <section >
      <h2 className='text-3xl font-bold my-4'>Our Team</h2>
     <div className='list-none'>
      <li>Privacy</li>
      <li>Features</li>
     </div>
    </section>
  </main>
  <footer className={`bg-blue-700 ${styles.footer}`}>
    <p>© 2024 office Space. All rights reserved.</p>
  </footer>
</>

    </div>
  )
}

export default About;