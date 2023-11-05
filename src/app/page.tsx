'use client';

import { Main } from '@/views';
import { ScreenContext } from '@/contexts';

export default function App() {
  return (
    <ScreenContext.ScreenProvider>
      <Main />
    </ScreenContext.ScreenProvider>
  );
}
