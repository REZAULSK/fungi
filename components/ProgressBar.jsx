'use client';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ProgressBar = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = props.percentage;
      const duration = 60; // Duration of animation in ms
      const increment = end / duration;

      const animate = () => {
        start += increment;
        if (start < end) {
          setProgress(start);
          requestAnimationFrame(animate);
        } else {
          setProgress(end);
        }
      };

      animate();
    }
  }, [inView, props.percentage]);

  return (
    <div className="skill-progress-bar relative mb-[24px]" ref={ref}>
      <div className={` ${props.skillName}`}>{props.skill}</div>
      <div className={`${props.ProgressContainer}`}>
        <div
          className={`${props.ProgressBar}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={`${props.percentageLabel}`}>{Math.round(progress)}%</div>
    </div>
  );
};

export default ProgressBar;