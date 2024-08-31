import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = (props) => {
  return (
    <AnimatedCursor
    innerSize={4}
    outerSize={30}
    innerScale={1}
    outerScale={1}
    outerAlpha={0}
    hasBlendMode={true}
    trailingSpeed={6}
    innerStyle={{
      backgroundColor: props.customColor
    }}
    outerStyle={{
      border: `1px solid ${props.customBorderColor}`
    }}
    />
  );
};

export default CustomCursor;