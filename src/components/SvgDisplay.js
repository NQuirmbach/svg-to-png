import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgDisplay = ({ scale, dataUrl }) => {
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [ref]);

  const resizeCanvas = () => {
    ref.current.style.height = ref.current.clientWidth + 'px';
  };

  return <Canvas ref={ref} scale={scale}></Canvas>;
};
SvgDisplay.propTypes = {
  scale: PropTypes.number.isRequired,
};

const Canvas = styled.canvas`
  width: 100%;
  border: 1px solid #eee;
`;

export default SvgDisplay;
