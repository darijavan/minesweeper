import React from 'react';
import './menu.scss';
import { MineIcon } from '../components/icons';
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

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MineIcon id="mineIcon" size={150} color="#333333" />
      <h1 className={classes.title}>Minesweeper</h1>
      <h1>By Darija</h1>
    </div>
  );
};

export default Menu;
