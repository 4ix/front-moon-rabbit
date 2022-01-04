import React from 'react';
import Accordion from './Accordion';
import { accordionData } from '../data/content';

export const Faqs = (props) => {
  return (
    <div id='faqs'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>FAQ</h2>
        </div>
        <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      </div>
    </div>
  )
}