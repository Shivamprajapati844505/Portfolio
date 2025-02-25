import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  const handleClick = (url) => {
    window.open(url, '_blank'); // New tab me open karega
  };

  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={work.w_name}
            onClick={() => handleClick(work.w_url)}
            style={{ cursor: 'pointer' }} // Pointer cursor dikhayega
          />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
