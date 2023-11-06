import React, { createContext, useContext } from 'react';

import { useScreen, SCREEN_TYPE } from '@/hooks';

const { IDLE } = SCREEN_TYPE;

const ScreenContext = createContext({ screen: IDLE });

function ScreenProvider({ children }: { children: any }) {
  const { screen } = useScreen();

  return <ScreenContext.Provider value={{ screen }}>{children}</ScreenContext.Provider>;
}

function useScreenContext() {
  return useContext(ScreenContext);
}

export default { ScreenProvider, useScreenContext };
