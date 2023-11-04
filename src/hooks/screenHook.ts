import { useState, useEffect, useMemo } from 'react';

export type ScreenType = 'DESKTOP' | 'TABLET' | 'PHONE' | 'IDLE';

const IDLE: ScreenType = 'IDLE';
const DESKTOP: ScreenType = 'DESKTOP'; // > 1023px
const TABLET: ScreenType = 'TABLET'; // 481px - 1023px
const PHONE: ScreenType = 'PHONE'; // < 480px

export const SCREEN_TYPE: Record<ScreenType, ScreenType> = {
  IDLE,
  DESKTOP,
  TABLET,
  PHONE,
};

const calculateScreenType = (windowSize: number): ScreenType => {
  if (!windowSize) return IDLE;

  if (windowSize <= 480) return PHONE;

  if (windowSize <= 1023) return TABLET;

  return DESKTOP;
};

export function useScreen() {
  if (typeof window === 'undefined')
    return {
      screen: IDLE,
    };

  const [windowWidth, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const screenType = useMemo(() => calculateScreenType(windowWidth), [windowWidth]);

  return {
    screen: screenType,
  };
}
