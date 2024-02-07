import React, { useState } from 'react';
import './slider.scss';
import IconButon from '../ui/IconButon/IconButon';

const Slider = ({ data }) => {
  const [activeId, setActiveId] = useState(0);

  const clicked = (index) => {
    setActiveId(index);
  };

  const prev = () => {
    setActiveId((prevId) => {
      if (prevId > 0) {
        return prevId - 1;
      }
      return prevId;
    });
  };

  const next = () => {
    setActiveId((prevId) => {
      if (prevId < data.length - 1) {
        return prevId + 1;
      }
      return prevId;
    });
  };

  return (
    <>
      <div className="actions flex justify-end ap-10">
        <IconButon
          direction="left"
          onClick={prev}
          disable={activeId === 0}
        />
        <IconButon
          direction="right"
          onClick={next}
          disable={activeId === data.length - 1}
        />
      </div>

      <div className="slider">
        {data.map((slide, index) => (
          <div 
            key={index} 
            className={`slide${index === activeId ? ' active_slide' : ''}`}
            onClick={() => clicked(index)}
            >

            <img className="slide__bg" src={slide.img} alt={`slide ${index + 1}`} />
            
            <div className="slide__info">
              <div className="slide__label">{slide.comment}</div>
              <div className="slide__label">{slide.name}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
