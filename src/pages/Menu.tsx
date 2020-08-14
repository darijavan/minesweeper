import React from 'react';
import { MineIcon } from '../components/icons';
import { makeStyles } from '@material-ui/core/styles';
import { motion, Variants } from 'framer-motion';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
  icon: {
    width: 160,
    height: 160,
    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
  title: {
    textAlign: 'center',
    fontSize: 90,
  },
  author: {
    overflow: 'hidden',
  },
  container: {
    width: 350,
    overflow: 'hidden',
    boxSizing: 'border-box',
    borderRadius: 50,
    backgroundColor: 'rgba(33, 33, 33, .6)',
  },
  menuRoot: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
  },
  menuBtn: {
    fontSize: 20,
    fontFamily: "'Merienda', cursive",
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 100,
    padding: theme.spacing(2),
    '&:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
}));

const variants: Variants = {
  fullHeight: {
    height: 'auto',
  },
  zeroHeight: {
    height: 0,
    transition: {
      duration: 1,
    },
  },
  showMenu: {
    marginTop: 20,
    height: 'auto',
  },
  reduceSize: {
    width: 100,
    height: 100,
    transition: {
      duration: 0.6,
    },
  },
  reduceFontSize: {
    fontSize: 50,
    transition: {
      duration: 0.6,
    },
  },
};

const Menu: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <motion.div
        className={classes.icon}
        variants={variants}
        animate="reduceSize"
      >
        <MineIcon id="mineIcon" color="#333333" />
      </motion.div>
      <motion.h1
        variants={variants}
        animate="reduceFontSize"
        className={classes.title}
      >
        Minesweeper
      </motion.h1>
      <motion.h1
        className={classes.author}
        variants={variants}
        initial="fullHeight"
        animate="zeroHeight"
      >
        By Darija
      </motion.h1>

      <motion.div
        className={classes.container}
        variants={variants}
        initial="zeroHeight"
        animate="showMenu"
        transition={{ delay: 1 }}
      >
        <div className={classes.menuRoot}>
          <Button
            className={classes.menuBtn}
            color="primary"
            variant="contained"
          >
            Jouer
          </Button>
          <Button
            className={classes.menuBtn}
            color="primary"
            variant="contained"
          >
            Paramètres
          </Button>
          <Button
            className={classes.menuBtn}
            color="primary"
            variant="contained"
          >
            A propos
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
