import React from 'react'
import HeadingWallpaper from '../Components/HeadingWallpaper'
import img from '../Assets/carousel-2.jpg'
import CoursesCategory from '../Components/CoursesCategory'

const Courses = () => {
  return (
    <div>
      <HeadingWallpaper img={img} heading="Courses" headLink="Courses"/>
      <CoursesCategory/>
      Courses
      </div>
  )
}

export default Courses