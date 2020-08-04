import React, {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from 'react';
import ExplosionImage from '../assets/img/explosion.gif';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './explosion.scss';

interface ExplosionProps {
  id?: string;
  className?: string;
}

export interface ExplosionAction {
  play: () => void;
}

const useStyles = makeStyles(() => ({
  root: ({ explode }: { explode: boolean }) => ({
    display: explode ? 'block' : 'none',
  }),
}));

export const Explosion = React.forwardRef<ExplosionAction, ExplosionProps>(
  ({ id, className }, ref) => {
    const [explode, setExplode] = useState(false);

    const classes = useStyles({ explode });

    const play = useCallback(() => {
      setExplode(true);
      setTimeout(() => setExplode(false), 1000);
    }, []);

    useImperativeHandle(ref, () => ({
      play,
    }));

    return (
      <img
        id={id}
        src={ExplosionImage}
        className={clsx(className, classes.root)}
      />
    );
  },
);
