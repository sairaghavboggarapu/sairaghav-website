import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}

                        />
                    </h1>
                    <p>
                        I'm Optimistic person and very ambitious to grow as a Software developer looking for a
                        role in established IT company with the opportunity to work with latest technologies
                        on challenging and diverse projects.
                    </p>
                    <p>
                        I'm naturally curious , self-motivated , selfdependent and always serious to learn
                        new techologies which groome my carrier.

                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a Entrepreneur, a business fanatic,
                        motivator , enthusiast and tech-obsessed!!
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="DarkBlue" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="skyblue" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="orange" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="yellow" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGithub} color="black" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJava} color="white and blue" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>


    )


}
export default About;