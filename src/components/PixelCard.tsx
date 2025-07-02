import React from 'react';

interface PixelCardProps {
  variant?: string;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const PixelCard: React.FC<PixelCardProps> = ({ className = '', children }) => {
  return <div className={className}>{children}</div>;
};

export default PixelCard;
