import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import Image from 'next/image';
import { map, size } from 'lodash';

import { SCREEN_TYPE } from '@/hooks';
import { ScreenContext } from '@/contexts';
import { AlthletsImageMap, PlayerImageMap, contents } from './helper';

const { PHONE } = SCREEN_TYPE;

const { useScreenContext } = ScreenContext;

import { Headline, BlockContent } from './components';

function handleContentChange(currentState: any, section: string, next: number): number {
  const startIndex = 0;
  const lastIndex = size(contents[section]) - 1;
  const currentIndex: number = currentState[section];

  const swipeRightAtLimit = next > 0 && currentIndex === lastIndex;

  if (swipeRightAtLimit) return startIndex;

  const swipeLeftAtStart = next < 0 && currentIndex === startIndex;

  if (swipeLeftAtStart) return lastIndex;

  return currentIndex + next;
}

function Main() {
  const { screen } = useScreenContext();

  const [current, setCurrent] = useState({
    ATHLETS: 0,
  });

  const althletsSrc = AlthletsImageMap[screen];
  const playerSrc = PlayerImageMap[screen];

  const isMobile = screen === PHONE;

  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx], direction: [xDir], args }) => {
        const [section] = args;
        console.log('Drag!!');
        if (xDir === 1) {
          setCurrent((curr: any): any => {
            return {
              ...curr,
              [section]: handleContentChange(curr, section, -1),
            };
          });
        } else if (xDir === -1) {
          setCurrent((curr: any): any => {
            return {
              ...curr,
              [section]: handleContentChange(curr, section, 1),
            };
          });
        }
      },
    },
    {
      drag: {
        threshold: 5,
      },
    },
  );

  return (
    <div className="relative grid grid-cols-1 gap-0">
      <div
        className="
          bg-white pt-[2.4rem] pb-[0rem] pl-[50%]
          md:pt-[8rem] md:pb-[0rem] md:pl-[30%]
          sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
        "
      >
        <Headline>ATHLETS</Headline>
      </div>
      <div
        className="
          absolute top-[8rem] left-0 w-1/2 h-full z-10
          md:w-1/2 md:-left-[10%]
          sm:w-full sm:h-[30rem] sm:top-[11rem]
        "
      >
        <Image src={althletsSrc} alt="AlthletsImage" fill style={{ objectFit: 'contain' }} />
      </div>
      <div className="relative sm:flex sm:w-full sm:h-[30rem] sm:overflow-hidden sm:z-0" {...bind('ATHLETS')}>
        {map(contents.ATHLETS, (block, index) => {
          const isActive = !isMobile || index === current['ATHLETS'];
          return (
            isActive && (
              <BlockContent key={block.id} config={block.config} topic={block.topic} content={block.content} />
            )
          );
        })}
        {isMobile ? (
          <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] flex gap-[1rem]">
            {map(contents.ATHLETS, (block, index) => {
              const isActive = index === current['ATHLETS'];
              const dotColorConfig = block.topic.config.dotColor;
              const dotColor = !isActive ? 'bg-grey' : dotColorConfig;
              return <div key={index} className={`w-[1rem] h-[1rem] ${dotColor} rounded-full`} />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Main;
