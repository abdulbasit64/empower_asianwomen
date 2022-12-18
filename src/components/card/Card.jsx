import React from 'react';
import {
  pinkShade,
  cardBtnColor,
  cardBtnFontColor,
  headingColor,
} from '../../constants/colors';
import Button from '../button/Button';

function Card({ imageSrc, title, text, to, size, rounded, font }) {
  return (
    <div
      className={`flex flex-col ${rounded && 'rounded-3xl'} ${
        size == 'small' ? 'max-w-xs pb-3' : 'max-w-md pb-8'
      } items-center  gap-4 `}
      style={{ backgroundColor: pinkShade }}>
      <img
        src={imageSrc}
        className={`object-cover ${
          rounded && 'rounded-3xl'
        } select-none outline-none`}
        alt='card_cover_photo'></img>
      <div className='h-16 w-full flex items-center justify-center'>
        <h2
          className={`text-xl ${
            size ? 'lg:text-2xl' : 'lg:text-3xl'
          } font-semibold`}
          style={{ fontFamily: !font ? 'Arial' : '' }}>
          {title}
        </h2>
      </div>
      {text && (
        <Button
          text={text}
          bg={cardBtnColor}
          color={cardBtnFontColor}
          to={''}
          btnStyle='wide'
        />
      )}
    </div>
  );
}

export default Card;
