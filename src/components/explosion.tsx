import React, {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
} from 'react';
import ExplosionImage from '../assets/img/explosion.gif';
import clsx from 'clsx';
import './explosion.scss';

interface ExplosionProps {
  id?: string;
  className?: string;
}

export interface ExplosionAction {
  play: () => void;
}

export const Explosion = React.forwardRef<ExplosionAction, ExplosionProps>(
  ({ id, className }, ref) => {
    const [explode, setExplode] = useState(false);

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
        className={clsx('explosion', className, { explode })}
      />
    );
  },
);
