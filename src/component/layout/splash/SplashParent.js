import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import SplashChild from './SplashChild';
import { useHistory } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const openLoader = true;

const color = '#F44336';

const styleProps = {
  override,
  openLoader,
  color,
};

export default function SplashParent() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  });

  return <SplashChild styles={styleProps} />;
}
