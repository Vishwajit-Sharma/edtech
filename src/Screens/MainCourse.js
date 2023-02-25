import React from 'react'
import { useParams } from 'react-router-dom';

const MainCourse = () => {

    const { category, subcategory } = useParams();

    let content;

  if (category === 'front-end-development') {
    if (subcategory === 'subcategory1') {
      content = (
        <>
          <h2>{category} - {subcategory}</h2>
          <p>This is the {subcategory} page for the {category} category.</p>
          <p>Content for subcategory 1 of front-end development.</p>
        </>
      );
    } else if (subcategory === 'subcategory2') {
      content = (
        <>
          <h2>{category} - {subcategory}</h2>
          <p>This is the {subcategory} page for the {category} category.</p>
          <p>Content for subcategory 2 of front-end development.</p>
        </>
      );
    } else if (subcategory === 'subcategory3') {
      content = (
        <>
          <h2>{category} - {subcategory}</h2>
          <p>This is the {subcategory} page for the {category} category.</p>
          <p>Content for subcategory 3 of front-end development.</p>
        </>
      );
    }
  } else  {
    content = (
        <h2>{category} - {subcategory}</h2>
    )
  }


  return (
    <div>
      {content}
    </div>
  )
}

export default MainCourse