import React from 'react'
import {  useParams } from 'react-router-dom';
import HeadingWallpaper from '../Common/HeadingWallpaper';
import img from '../Assets/carousel-1.jpg'


const ShowCourse= () => {

    const { course } = useParams();

  return (
   <div>
    <HeadingWallpaper img={img} heading={course} headLink={course} isCourses={true}/>
      <h1>{course}</h1>

    </div>
  )
}

export default ShowCourse