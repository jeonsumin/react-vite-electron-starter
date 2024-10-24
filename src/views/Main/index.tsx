import { useNavigate } from 'react-router-dom';
import { Img } from 'assets';
import React from 'react';

type Props = {};
const Main = (props: Props) => {
  const navigate = useNavigate();
  const doRoute = () => {
    navigate('About');
  };
  return (
    <>
      <h1>Main</h1>
      <h1 onClick={() => doRoute()}>About</h1>
      <img src={Img.react} alt={''}/>
    </>
  );
};

export default Main;
