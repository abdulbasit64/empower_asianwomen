import React from 'react';
import Button from '../components/button/Button';
import Card from '../components/card/Card';
import Heading from '../components/heading/Heading';
import { headingColor, pinkShade, pinkShadeBg, white } from '../constants/colors';
import {
  aboutDesc,
  aboutOurOrganistaion,
  contentOrBlog,
  coreTeamM1Desc,
  coreTeamM2Desc,
  coreTeamMember1,
  coreTeamMember2,
  introDesc,
  media,
  meetOurCoreTeam,
  newsAndUpdates,
  newsCard1,
  newsCard2,
  newsCard3,
  newsCardDesc,
  ourWork,
  researchAndPlanning,
  researchAreas,
  seminars,
  whatWeDo,
  whatWeDoDesc,
} from '../constants/content';
import coreM1 from '../assets/images/coreM1.webp'
import coreM2 from '../assets/images/coreM2.webp'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
import aboutUsImg from '../assets/images/51lg.png'
import igLogo from '../assets/images/ig-logo.png'
import twitterLogo from '../assets/images/twitter-logo.png'

function Home() {
  return (
    <div>
      <section className='items-center lg:items-start lg:w-4/5 '>
        <h1
          className='font-semibold text-center lg:text-left my-5 mt-10 text-5xl sm:text-7xl md:text-7xl lg:text-8xl'
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
              src={aboutUsImg}
              className='object-cover'
              alt='about_us_photo'
            />
          </div>
        </div>
      </section>
      <section className='my-12 py-6'>
        <Heading title={whatWeDo} alwaysCenter={true} />
        <p className='my-8 mt-10 text-lg sm:text-xl'>{whatWeDoDesc}</p>
        <div className='flex flex-col justify-between lg:flex-row items-center gap-10 lg:gap-32 basis-8 mt-4'>
          <Card
            imageSrc={card1}
            size='small'
            rounded={true}
            text='Learn More'
            title={researchAndPlanning}
            key={researchAndPlanning}
          />
          <Card
            imageSrc={card2}
            size='small'
            rounded={true}
            text='Learn More'
            title={contentOrBlog}
            key={contentOrBlog}
          />
          <Card
            imageSrc={card3}
            size='small'
            rounded={true}
            text='Learn More'
            title={media}
            key={media}
          />
        </div>
      </section>

      <section className='my-12 py-6'>
        <Heading title={meetOurCoreTeam} alwaysCenter={true} />
        <div className='flex flex-col justify-around items-center mt-10 lg:flex-row'>
          {/* Member 1 */}
          <div className='flex flex-col items-center w-72 mb-6'>
            <img
              src={coreM1}
              className='object-cover rounded-full mb-4 w-40 lg:mb-8 lg:w-48'
              alt='core_team_member_1'
            />
            <h4
              className='text-2xl font-semibold mb-3'
              style={{ color: headingColor }}>
              {coreTeamMember1}
            </h4>
            <p
              className='text-justify leading-tight'
              style={{ fontFamily: 'Arial', color: headingColor }}>
              {coreTeamM1Desc}
            </p>
          </div>
          {/* Member 2 */}
          <div className='flex flex-col items-center w-72 mb-6'>
            <img
              src={coreM2}
              className='object-cover rounded-full mt-4 mb-4 w-40 lg:mb-8 lg:w-48 lg:mt-0'
              alt='core_team_member_1'
            />
            <h4
              className='text-2xl font-semibold mb-3'
              style={{ color: headingColor }}>
              {coreTeamMember2}
            </h4>
            <p
              className='text-justify leading-tight'
              style={{ fontFamily: 'Arial', color: headingColor }}>
              {coreTeamM2Desc}
            </p>
          </div>
        </div>
      </section>

      <section className='my-12 py-6'>
        <Heading title={ourWork} alwaysCenter={true} />
        <div className='flex flex-col justify-evenly lg:flex-row items-center gap-9 my-6 mt-10'>
          <Card
            imageSrc={card4}
            rounded={true}
            font={'inherit'}
            title={researchAreas}
            key={researchAreas}
          />
          <Card
            imageSrc={card5}
            rounded={true}
            font={'inherit'}
            title={seminars}
            key={seminars}
          />
        </div>
      </section>

      <section className='my-12 py-6'>
        <Heading title={newsAndUpdates} alwaysCenter={true} />
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 basis-8 mt-10'>
          <div className='max-w-xs'>
            <Card
              imageSrc={card4}
              size={'small'}
              font={'inherit'}
              title={newsCard1}
              key={researchAreas}
            />
            <p className='mt-6 text-center'>{newsCardDesc}</p>
          </div>
          <div className='max-w-xs'>
            <Card
              imageSrc={card4}
              size={'small'}
              font={'inherit'}
              title={newsCard2}
              key={researchAreas}
            />
            <p className='mt-6 text-center'>{newsCardDesc}</p>
          </div>
          <div className='max-w-xs'>
            <Card
              imageSrc={card4}
              size={'small'}
              font={'inherit'}
              title={newsCard3}
              key={researchAreas}
            />
            <p className='mt-6 text-center'>{newsCardDesc}</p>
          </div>
        </div>
      </section>

      <section className='my-12 pb-6'>
        <div className='full-width flex justify-center mb-10' style={{backgroundColor: pinkShadeBg}}>
          <img src='src/assets/images/contactUsBg.png' className='object-cover'/>
        </div>
        <Heading title='Contact Us'/>
        {/* Social Media And Email Links */}
        <div className='flex flex-col sm:flex-row justify-between mt-8'>
          <div className='text-left'>
            <h4 className='text-2xl font-bold' style={{ color: headingColor }}>
              Social Media
            </h4>
            <div className='flex my-2'>
              <img
                className='mr-2'
                width='24'
                src={igLogo}
                alt='instagram_logo'
              />
              <a
                href='https://www.instagram.com/empowerasianwomen'
                style={{ color: headingColor }}
                target='_blank'>
                @empowerasianwomen
              </a>
            </div>
            <div className='flex'>
              <img
                className='mr-2'
                width='24'
                src={twitterLogo}
                alt='twitter_logo'
              />
              <a
                href='https://twitter.com/empowerasian'
                style={{ color: headingColor }}
                target='_blank'>
                @empowerasian
              </a>
            </div>
          </div>
          <div className='text-left mt-5 sm:mt-0'>
            <h4 className='text-2xl font-bold' style={{ color: headingColor }}>
              Email Address
            </h4>
            <a
              style={{ color: headingColor }}
              href='mailto: empowerasianwomen@gmail.com'>
              empowerasianwomen@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
