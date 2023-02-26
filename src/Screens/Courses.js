import React, {useEffect} from 'react'
import HeadingWallpaper from '../Components/HeadingWallpaper'
import img from '../Assets/carousel-2.jpg'
import CoursesCategory from '../Components/CoursesCategory'

const Courses = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeadingWallpaper img={img} heading="Courses" headLink="Courses"/>
      <CoursesCategory/>
      </div>
  )
}

export default Courses