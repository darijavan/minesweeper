import React, { useState, useEffect } from 'react';
import './splash.scss';
import { MineIcon } from '../components/icons';
import { Explosion, ExplosionAction } from '../components/explosion';

const Splash: React.FC = () => {
  const explosionRef = React.createRef<ExplosionAction>();

  useEffect(() => {
    setTimeout(() => explosionRef.current?.play(), 2000);
  }, []);

  return (
    <div id="splashContainer">
      <MineIcon id="mineIcon" size={150} color="#333333" />
      <h1 id="splashTitle">Minesweeper</h1>
      <h1 id="splashAuthor">By Darija</h1>
      <Explosion id="splashExplosion" ref={explosionRef} />
    </div>
  );
};

export default Splash;
