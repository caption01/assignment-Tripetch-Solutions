import React, { useState } from 'react';
import { useDrag, useGesture } from '@use-gesture/react';
import Image, { StaticImageData } from 'next/image';
import { map, size } from 'lodash';

import { useScreen, SCREEN_TYPE } from '@/hooks';
import AthletsDesktop from '@public/assets/athlets-desktop.png';
import AthletsTablet from '@public/assets/athlets-tablet.png';
import AthletsMoblie from '@public/assets/athlets-mobile.png';

import { Headline, BlockContent } from './components';

const { DESKTOP, TABLET, PHONE, IDLE } = SCREEN_TYPE;

const AlthletsImageMap: Record<string, StaticImageData> = {
  [DESKTOP]: AthletsDesktop,
  [TABLET]: AthletsTablet,
  [PHONE]: AthletsMoblie,
  [IDLE]: AthletsDesktop,
};

const contents: Record<string, any[]> = {
  ATHLETS: [
    {
      id: 'ATHLETS-1',
      config: {
        bgColor: 'white',
      },
      topic: {
        order: 1,
        body: 'CONNECTION',
        config: {
          underLineColor: 'darkPurple',
        },
      },
      content: {
        body: 'Connect with coaches directly, you can ping coaches to view profile.',
        config: {
          fontColor: 'black',
        },
      },
    },
    {
      id: 'ATHLETS-2',
      config: {
        bgColor: 'whitePurple',
      },
      topic: {
        order: 2,
        body: 'COLLABORATION',
        config: {
          underLineColor: 'darkPurple',
        },
      },
      content: {
        body: 'Work with other student athletes to increase visibility. When you share and like other players videos it will increase your visibility as a player. This is the team work aspect to Surface 1.',
        config: {
          fontColor: 'black',
        },
      },
    },
    {
      id: 'ATHLETS-3',
      config: {
        bgColor: 'darkPurple',
      },
      topic: {
        order: 3,
        body: 'GROWTH',
        config: {
          underLineColor: 'white',
        },
      },
      content: {
        body: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc.',
        config: {
          fontColor: 'white',
        },
      },
    },
  ],
};

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
  const { screen } = useScreen();
  const [current, setCurrent] = useState({
    ATHLETS: 0,
  });

  const althletsSrc = AlthletsImageMap[screen];

  const isMobile = screen === PHONE;

  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx], direction: [xDir], args }) => {
        const [section] = args;
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
    <div className="relative grid grid-cols-1 gap-0 ">
      <div
        className="
        bg-white pt-[6rem] pl-[50%] mb-[3rem] 
        md:pl-[30%]
        sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
      "
      >
        <Headline>ATHLETS</Headline>
      </div>
      <div
        className="
          absolute top-[8rem] left-0 w-1/2 h-full 
          md:w-3/4 md:-left-[20%]
          sm:w-full sm:h-[30rem] sm:top-[16rem]
        "
      >
        <Image src={althletsSrc} alt="AlthletsImage" fill style={{ objectFit: 'contain' }} />
      </div>
      <div className="sm:flex sm:w-full sm:h-[30rem] sm:overflow-hidden" {...bind('ATHLETS')}>
        {map(contents.ATHLETS, (block, index) => {
          const isActive = !isMobile || index === current['ATHLETS'];
          return (
            isActive && (
              <BlockContent key={block.id} config={block.config} topic={block.topic} content={block.content} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Main;
