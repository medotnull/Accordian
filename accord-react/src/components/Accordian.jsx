import React, { useEffect, useState } from 'react'
import faq from '../API/faq.json'
import {FAQ} from "./UI/FAQ";

const Accordian = () => {
    const [data, setData] = useState([]);
    //render data just for the first time 

    const [activeId, setActiveId] = useState(false)

    useEffect(() => {
      setData(faq); // 2. setData(faq) updates the state, triggering a re-render with the new data.
    }, []); // 1. [] tells this effect will run once, after the initial render
      
    // handleButton 
    const handleButton = (id) => {
      setActiveId((prevId) => (prevId === id? false : id));
    };

  return <>
  <h1>The Accordion</h1>
  <ul className='section-accordion'>
    {
      data.map((curElem) => { //data.map turns array into list & key is neccessary when use map method
        return <FAQ 
        key={curElem.id}
        curData={curElem} 
        isActive = {activeId === curElem.id}
        onToggle={() => handleButton(curElem.id)}
        />;
      })
    }
  </ul>
  </> 
  
};

export default Accordian