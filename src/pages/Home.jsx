import React from 'react';
import Button from '../components/button/Button';
import { pinkShade, white } from '../constants/colors';

function Home() {
  return (
    <div>
      <section className='items-center lg:items-start'>
        <h1 className='font-semibold my-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl' lang='en'>
          Empowering Asian Women
        </h1>
        <p id='intro' className='my-12'>
          A non-profit, non-political and international organization set up in
          2022 which aims at changing the roles of women in Asia through
          encouragement, celebration and empowerment.
        </p>
        <Button text='Become a supporter' bg={pinkShade} color={white} />
      </section>

      <section className='my-6'>
        <h2 className='text-3xl font-semibold my-2' lang='en'>
          About our Organisation
        </h2>
        <p className='my-8 text-justify'>
          Asian women may encounter a variety of challenges in realizing their
          full potential as a result of cultural prejudices and preconceptions.
          Many Asian women are making important contributions, both at home and
          worldwide, yet they are not adequately acknowledged. Our objective is
          to highlight these powerful women through our platform. Through
          imaginative storytelling, we hope to foster a supportive environment
          where Asian women may advance and serve as role models for younger
          generations.
        </p>
      </section>

    </div>
  );
}

export default Home;
