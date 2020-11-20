import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "안녕하세요 201740206 김주호입니다. about 페이지입니다."
            </span>
            <span>- 김주호</span>
        </div>
    );
}

export default About;