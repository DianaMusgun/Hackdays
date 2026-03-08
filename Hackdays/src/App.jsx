import React from 'react'
import NavBar from './componnet/NavBar'
import Landing from './componnet/landing'
import AboutUs from './componnet/Aboutus'
import FAQ from './componnet/FAQ'
import ContactUs from './componnet/ContactUs'
import Footer from './componnet/footer'
import './style/reset.css'
import './style/index.css'
import './style/App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Landing />
        <AboutUs />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default App