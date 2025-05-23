import React from 'react';
import Two from './Two';

const One = ({ theme }) => {
  return (
    <>
      <div>One</div>
      <Two theme={theme} />
    </>
  );
};

export default One;
