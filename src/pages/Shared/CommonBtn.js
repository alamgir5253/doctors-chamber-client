import React from 'react';

const CommonBtn = ({ children}) => {
  return (
    <button className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary font-bold">{children}</button>
  );
};

export default CommonBtn;