import React from 'react';
import Styles from './button.module.css';

function Button({text, to, bg, color, btnStyle}) {
  return (
    <a href={to}>
      <div
        className={[`rounded-full  px-7 ${btnStyle=='wide' ? 'py-2 px-16' : 'py-4'} m-2 w-fit`, Styles.btn].join(' ')}
        style={{ backgroundColor: bg, paddingTop: btnStyle }}>
        <p
          className={`text-base ${btnStyle=='wide' ? 'font-semibold' : 'font-normal'} uppercase whitespace-nowrap`}
          style={{ fontFamily: 'Arial', color: color }}>
          {text}
        </p>
      </div>
    </a>
  );
}

export default Button;
