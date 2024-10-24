import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Loading = (props: any, ref: any) => {
  useImperativeHandle(ref, () => ({
    set,
  }));
  const [show, setShow] = useState<boolean>(false);

  const set = (props: any) => {
    setShow(props.show);
  };

  if (show) {
    return (
      <div className='sk-chase'>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
        <div className='sk-chase-dot'></div>
      </div>
    );
  }
};

export default forwardRef(Loading);
