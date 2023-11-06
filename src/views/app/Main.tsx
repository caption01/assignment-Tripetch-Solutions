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
    PLAYERS: 0,
  });

  const althletsContents = contents['ATHLETS'];
  const althletsSrc = AlthletsImageMap[screen];

  const playersContents = contents['PLAYERS'];
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
    <>
      {/* ATHLETS Section */}
      <div className="relative grid grid-cols-1 gap-0">
        <div
          className="
            bg-white pt-[2.4rem] pb-[0rem] pl-[50%]
            md:pt-[8rem] md:pb-[0rem] md:pl-[40%]
            sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
          "
        >
          <Headline>ATHLETS</Headline>
        </div>
        <div
          className="absolute z-10 h-full
            top-[8rem] left-[0rem] w-[70rem]
            md:top-[8rem] md:-left-[10rem] md:w-[50rem]
            sm:w-full sm:h-[30rem] sm:top-[11rem]
          "
        >
          <Image src={althletsSrc} alt="AlthletsImage" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="relative sm:flex sm:w-full sm:h-[30rem] sm:overflow-hidden sm:z-0" {...bind('ATHLETS')}>
          {map(althletsContents, (block, index) => {
            const isActive = !isMobile || index === current['ATHLETS'];
            return (
              isActive && (
                <BlockContent
                  key={block.id}
                  position="right"
                  config={block.config}
                  topic={block.topic}
                  content={block.content}
                />
              )
            );
          })}
          {isMobile ? (
            <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] flex gap-[1rem]">
              {map(althletsContents, (block, index) => {
                const isActive = index === current['ATHLETS'];
                const dotColorConfig = block.topic.config.dotColor;
                const dotColor = !isActive ? 'bg-grey' : dotColorConfig;
                return <div key={index} className={`w-[1rem] h-[1rem] ${dotColor} rounded-full`} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
      {/* PLAYERS Section */}
      <div className="relative grid grid-cols-1 gap-0">
        <div
          className="
          bg-white pt-[12.4rem] pb-[0rem] pl-[10%]
          md:pt-[5rem] md:pb-[0rem] md:pl-[5%]
          sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
        "
        >
          <Headline>PLAYERS</Headline>
        </div>
        <div
          className="absolute z-10 h-full
            top-[0rem] right-[0rem] w-[70rem]
            md:-top-[5rem] md:right-[0rem] md:w-[50rem]
            sm:w-full sm:h-[30rem] sm:top-[11rem]
          "
        >
          <Image src={playerSrc} alt="PlayersImage" fill style={{ objectFit: 'contain' }} />
        </div>
        <div className="relative sm:flex sm:w-full sm:h-[30rem] sm:overflow-hidden sm:z-0" {...bind('PLAYERS')}>
          {map(playersContents, (block, index) => {
            const isActive = !isMobile || index === current['PLAYERS'];
            return (
              isActive && (
                <BlockContent
                  key={block.id}
                  position="left"
                  config={block.config}
                  topic={block.topic}
                  content={block.content}
                />
              )
            );
          })}
          {isMobile ? (
            <div className="absolute bottom-[10%] left-[50%] -translate-x-[50%] flex gap-[1rem]">
              {map(althletsContents, (block, index) => {
                const isActive = index === current['PLAYERS'];
                const dotColorConfig = block.topic.config.dotColor;
                const dotColor = !isActive ? 'bg-grey' : dotColorConfig;
                return <div key={index} className={`w-[1rem] h-[1rem] ${dotColor} rounded-full`} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Main;
