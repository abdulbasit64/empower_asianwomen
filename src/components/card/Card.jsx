import React from 'react';
import {
  pinkShade,
  cardBtnColor,
  cardBtnFontColor,
  headingColor,
} from '../../constants/colors';
import Button from '../button/Button';

function Card({imageSrc, title, text, to }) {
  return (
    <div className='flex flex-col rounded-3xl max-w-xs items-center gap-10 pb-3' style={{ backgroundColor: pinkShade }}>
      <img
        src={imageSrc}
        className='object-cover rounded-3xl select-none outline-none'
        alt='card_cover_photo'></img>
      <h2 className='text-2xl font-semibold' style={{ fontFamily: 'Arial' }}>{title}</h2>
      {text && <Button text={text} bg={cardBtnColor} color={cardBtnFontColor} to={''} btnStyle="wide" />}
    </div>
  );
}

export default Card;
