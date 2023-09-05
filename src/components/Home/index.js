import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'i', 'r', 'a', 'g', 'h', 'a', 'v'];
  const jobArray = [
    'J',
    'a',
    'v',
    'a',
    ' ',
    'f',
    'u',
    'l',
    'l',
    '',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _20`}>i,</span>
            <br />
            <span className={`${letterClass} _21`}>I</span>
            <span className={`${letterClass} _22`}>'m</span>
            <img src={LogoTitle} alt="developer" />

            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={25} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={40} />
          </h1>
          <h2>Java Developer / React JS / Freelancer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
