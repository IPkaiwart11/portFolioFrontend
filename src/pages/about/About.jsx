import React from 'react'
// import Navbar from '../../components/navbar/Navbar'
// import Footer from '../../components/footer/Footer'
// import Mydetails from '../../components/mydetails/Mydetails'
// import Skill from '../../components/skills/Skill'
// import Education from '../../components/education/Education'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Mydetails from '@/components/mydetails/Mydetails'
import Skill from '@/components/skills/Skill'
import Education from '@/components/education/Education'

export default function About() {
  return (
    <>
     <Navbar/>
     <Mydetails/>
     <Education/>
     <Skill/>
     <Footer/>
    </>
  )
}
