import React, { useEffect } from 'react';
import './splash.scss';
import { MineIcon } from '../components/icons';
import { Explosion, ExplosionAction } from '../components/explosion';
import { useRouter } from '../components/Route';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundImage: 'linear-gradient(127.2deg, #05a1c0 0%, #0ff74a 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Merienda', cursive",
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 80,
  },
}));

const Splash: React.FC = () => {
  const explosionRef = React.createRef<ExplosionAction>();

  const classes = useStyles();

  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => explosionRef.current?.play(), 2000);
    setTimeout(() => push('/menu'), 3500);
  }, []);

  return (
    <div className={classes.root}>
      <MineIcon size={150} color="#333333" />
      <h1 className={classes.title}>Minesweeper</h1>
      <h1>By Darija</h1>
      <Explosion id="splashExplosion" ref={explosionRef} />
    </div>
  );
};

export default Splash;
