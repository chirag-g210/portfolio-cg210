import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import MagneticButton from './MagneticButton';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  href,
  className
}) => {
  const content = (
    <Button variant="glow" size="lg" onClick={onClick} className="w-full sm:w-auto">
      {children}
    </Button>
  );

  const isInternalRoute = href && href.startsWith('/');

  return (
    <MagneticButton className={className}>
      {href ? (
        isInternalRoute ? (
          <Link to={href} className="block">
            {content}
          </Link>
        ) : (
          <a href={href} className="block">
            {content}
          </a>
        )
      ) : (
        content
      )}
    </MagneticButton>
  );
};

export default AnimatedButton;
