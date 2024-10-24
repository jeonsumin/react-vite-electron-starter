import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/loading';

export default function Navigate() {
  const loadingRef = useRef(null);
  return (
    <>
      <Outlet context={{ loadingRef }} />
      <Loading ref={loadingRef} />
    </>
  );
}
