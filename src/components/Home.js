import React from 'react';
import './main.css';
import Profile_Image from '../assets/profile_img.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const home = () => {
  return (
    <>
      <main id='home'>
        <h1 className='lg-heading'>
          Amokelane <span className='text-secondary'>Baloyi</span>
        </h1>
        <h2 className='sm-heading'>Let me tell you a few things...</h2>
        <div className='about-me'>
          <img
            src={Profile_Image}
            alt='Amokelane Baloyi'
            className='bio-image'
          />
          <div className='bio'>
            <h3 className='text-secondary'>ABOUT ME</h3>
            <p>
              A little bit about myself. Where shall I begin? Other than being a
              recent graduate from the University of Pretoria who majored in
              Infomation Systems, I am more of a tech enthusiast, an introverted
              anime binging machine most of the times, and an extroverted soccer
              player on special ocassions. Well, that wraps up the little bits I
              love about myself. What you want to know is why I want to become a
              Software Engineer at SovTech. I have three reasons:
            </p>
          </div>
          <div className='job job-1'>
            <h3>Culture</h3>
            <p>
              After a couple of scrolls on your socials, where you showcase the
              various events organised for the company personel, I witnessed an
              inviting work environment, Collaborative software developers, and
              A diverse group of people. This is an environment I know I can
              thrive in as software developer.{' '}
            </p>
          </div>
          <div className='job job-2'>
            <h3>Exposure</h3>
            <p>
              This reason comes from a visit I made on your company website. You
              offer software solutions to customers looking to start a business,
              improve upon their business enterprise and or establish an online
              presence in the competitive market. I studied for this. The
              foundation to become a business analyst/ software developer has
              been laid. All that is left is to build up and establish myself in
              this field. At SovTech is where I hope to lay the first few
              bricks.
            </p>
          </div>
          <div className='job job-3 '>
            <h3>Growth</h3>
            <p>
              While laying my bricks, focusing on establishing myself, I want to
              grow and improve upon the skills I already possess as a software
              developer. At SovTech, with this Graduate Programme, I hope to
              fulfil this.
            </p>
          </div>
        </div>
      </main>
      <footer id='icons'>
        <a
          target={'_blank'}
          href='https://twitter.com/AmoSupreme'
          className='icons'
        >
          <TwitterIcon fontSize='large' />
        </a>
        <a
          target={'_blank'}
          href='https://www.linkedin.com/in/amokelane-baloyi-0b39111bb/'
          className='icons'
        >
          <LinkedInIcon fontSize='large' />
        </a>
        <a
          target={'_blank'}
          href='https://github.com/AmokelaneB'
          className='icons'
        >
          <GitHubIcon fontSize='large' />
        </a>
      </footer>
    </>
  );
};

export default home;
