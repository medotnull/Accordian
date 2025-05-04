import React, { useEffect, useState } from 'react'
import faq from '../API/faq.json'
import { useState } from 'react';

const Accordian = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(faq);
    }, []);
  return <>
  <h1>The Accordion</h1>
  <ul className='section-accordion'>
    {
      data.map((curElem) => {
        return <li key={curElem.id}>
          <div className='accoridion-grid'>
            <p>{curElem.question}</p>
            <button>Show</button>
          </div>
        </li>
      })
    }
  </ul>
  </> 
  
};

export default Accordian