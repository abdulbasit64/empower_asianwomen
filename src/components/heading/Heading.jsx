import React from 'react';
import { headingColor } from '../../constants/colors';

function Heading({title, alwaysCenter}) {
  return (
    <h2
      className={`text-center text-4xl lg:text-6xl ${alwaysCenter ? '' : 'lg:text-left'} font-semibold my-2`}
      style={{ color: headingColor }}
      lang='en'>
      {title}
    </h2>
  );
}

export default Heading;
