import React, { useState } from 'react';
import { useGesture } from '@use-gesture/react';
import Image from 'next/image';
import { map, size } from 'lodash';

import { SCREEN_TYPE } from '@/hooks';
import { ScreenContext } from '@/contexts';

import { Headline, BlockContent, DotPagination } from './components';
import { AlthletsImageMap, PlayerImageMap, contents } from './helper';

const { PHONE } = SCREEN_TYPE;

const ATHLETS = 'ATHLETS';
const PLAYERS = 'PLAYERS';

const { useScreenContext } = ScreenContext;

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
    [ATHLETS]: 0,
    [PLAYERS]: 0,
  });

  const althletsSrc = AlthletsImageMap[screen];
  const playerSrc = PlayerImageMap[screen];

  const onSwipe = (section: string, next: number): void => {
    setCurrent((curr: any): any => {
      return {
        ...curr,
        [section]: handleContentChange(curr, section, next),
      };
    });
  };

  const currentAthletsIdx = current[ATHLETS];
  const currentPlayersIdx = current[PLAYERS];

  return (
    <>
      {/* ATHLETS Section */}
      <div className="relative grid grid-cols-1 gap-0">
        <div
          className="bg-white
            pt-[2.4rem] pb-[0rem] pl-[50%]
            md:pt-[8rem] md:pb-[0rem] md:pl-[40%]
            sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
          "
        >
          <Headline>ATHLETS</Headline>
        </div>
        <div
          className="absolute z-10
            top-[8rem] left-[5%] w-[70rem] h-[100%]
            md:top-[8rem] md:-left-[10rem] md:w-[50rem] md:h-[90%]
            sm:w-full sm:h-[30rem] sm:top-[11rem]
          "
        >
          <Image src={althletsSrc} alt="AlthletsImage" fill style={{ objectFit: 'contain' }} />
        </div>
        <BlockContentRender
          section={ATHLETS}
          position={'right'}
          currentContentIdx={currentAthletsIdx}
          onSwipeContent={onSwipe}
        />
      </div>
      {/* PLAYERS Section */}
      <div className="relative grid grid-cols-1 gap-0">
        <div
          className="bg-white
          pt-[12.4rem] pb-[0rem] pl-[10%]
          md:pt-[5rem] md:pb-[0rem] md:pl-[5%]
          sm:grid sm:p-[3rem] sm:pl-[3rem] sm:mb-[24rem]
        "
        >
          <Headline>PLAYERS</Headline>
        </div>
        <div
          className="absolute z-10
            top-[0rem] right-[5%] w-[70rem] h-[100%]
            md:top-[5rem] md:right-[0rem] md:w-[50rem] md:h-[80%]
            sm:w-full sm:h-[30rem] sm:top-[11rem]
          "
        >
          <Image src={playerSrc} alt="PlayersImage" fill style={{ objectFit: 'contain' }} />
        </div>
        <BlockContentRender
          section={PLAYERS}
          position={'left'}
          currentContentIdx={currentPlayersIdx}
          onSwipeContent={onSwipe}
        />
      </div>
    </>
  );
}

function BlockContentRender({
  section,
  position,
  currentContentIdx,
  onSwipeContent,
}: {
  section: string;
  position: string;
  currentContentIdx: number;
  onSwipeContent: (section: string, next: number) => void;
}) {
  const { screen } = useScreenContext();

  const isMobile = screen === PHONE;
  const contentItems = contents[section];

  const bind = useGesture(
    {
      onDragEnd: ({ movement: [mx], direction: [xDir], args }) => {
        const [section] = args;
        if (xDir === 1) {
          onSwipeContent(section, -1);
        } else if (xDir === -1) {
          onSwipeContent(section, 1);
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
    <div className="relative sm:flex sm:w-full sm:h-[30rem] sm:overflow-hidden sm:z-0" {...bind(section)}>
      {map(contentItems, (block, index) => {
        const isActive = !isMobile || index === currentContentIdx;
        return (
          isActive && (
            <BlockContent
              key={block.id}
              position={position}
              config={block.config}
              topic={block.topic}
              content={block.content}
            />
          )
        );
      })}
      {isMobile ? <DotPagination contents={contentItems} currentIdx={currentContentIdx} /> : null}
    </div>
  );
}

export default Main;
