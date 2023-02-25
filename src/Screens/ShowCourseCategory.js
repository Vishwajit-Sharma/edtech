import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import MainCourse from './MainCourse';

const ShowCourseCategory = ({ match }) => {
    const { category } = useParams();

  return (
   <div>
      <h1>{category}</h1>
      <div>
        <ul>
          <li><Link to={`/courses/${category}/subcategory1`}>Subcategory 1</Link></li>
          <li><Link to={`/courses/${category}/subcategory2`}>Subcategory 2</Link></li>
          <li><Link to={`/courses/${category}/subcategory3`}>Subcategory 3</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path={`/courses/${category}/:subcategory/`} element={<MainCourse/>} />
      </Routes>
    </div>
  )
}

export default ShowCourseCategory