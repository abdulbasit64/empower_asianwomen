import React from 'react';
import Button from '../components/button/Button';
import Card from '../components/card/Card';
import Heading from '../components/heading/Heading';
import { headingColor, pinkShade, white } from '../constants/colors';
import {
  aboutDesc,
  aboutOurOrganistaion,
  contentOrBlog,
  introDesc,
  media,
  researchAndPlanning,
  whatWeDo,
  whatWeDoDesc,
} from '../constants/content';

function Home() {
  return (
    <div>
      <section className='items-center lg:items-start lg:w-4/5 '>
        <h1
          className='font-semibold text-center lg:text-left my-5 text-5xl sm:text-7xl md:text-7xl lg:text-8xl'
          style={{ color: headingColor }}
          lang='en'>
          Empowering Asian Women
        </h1>
        <p id='intro' className='my-12 md:text-left text-lg sm:text-xl'>
          {introDesc}
        </p>
        <Button text='Become a part' bg={pinkShade} color={white} />
      </section>
      <section className='my-12'>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='flex-1 flex flex-col justify-center gap-5'>
            <Heading title={aboutOurOrganistaion} />
            <p className='my-8 text-justify text-lg sm:text-xl'>{aboutDesc}</p>
          </div>
          <div className='flex flex-1'>
            <img
              src='src\assets\images\51lg.png'
              className='object-cover'
              alt='about_us_photo'></img>
          </div>
        </div>
      </section>
      <section className='my-12 py-6'>
        <Heading title={whatWeDo} alwaysCenter={true}/>
        <p className='my-8 text-lg sm:text-xl'>{whatWeDoDesc}</p>
        <div className='flex flex-col justify-between lg:flex-row items-center gap-9'>
          <Card
            imageSrc='src\assets\images\card1Cropped.png'
            text='Learn More'
            title={researchAndPlanning}
            key={1}
          />
          <Card
            imageSrc='src\assets\images\card2Cropped.png'
            text='Learn More'
            title={contentOrBlog}
            key={2}
          />
          <Card
            imageSrc='src\assets\images\card3Cropped.png'
            text='Learn More'
            title={media}
            key={3}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
