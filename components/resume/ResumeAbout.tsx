import React from 'react';

import {
  About,
  Contact,
  Job,
  Name,
  ResumeAboutContainer,
} from './ResumeAbout.style';
import resumedata from '@/data/resumedata';

const ResumeAbout = () => {
  return (
    <ResumeAboutContainer>
      <Name>{resumedata.name}</Name>
      <Job>{resumedata.job}</Job>
      <Contact>{resumedata.contact}</Contact>
      <About>
        {resumedata.about.map((about, index) => (
          <React.Fragment key={index}>
            {about} <br />
          </React.Fragment>
        ))}
      </About>
    </ResumeAboutContainer>
  );
};

export default ResumeAbout;
