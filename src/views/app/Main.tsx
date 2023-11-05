import Image, { StaticImageData } from 'next/image';
import { map } from 'lodash';
import { useScreen, SCREEN_TYPE } from '@/hooks';

import AthletsDesktop from '@public/assets/athlets-desktop.png';
import AthletsTablet from '@public/assets/athlets-tablet.png';

import BlockContent from './components/BlockContent';

const { DESKTOP, TABLET } = SCREEN_TYPE;

const AlthletsImageMap: Record<string, StaticImageData> = {
  [DESKTOP]: AthletsDesktop,
  [TABLET]: AthletsTablet,
};

const contents = {
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

function Main() {
  const { screen } = useScreen();

  const althletsSrc = AlthletsImageMap[screen];

  return (
    <div
      className="relative grid grid-cols-1 gap-0 
      md:grid-cols-1 md:gap-0 
      sm:grid-cols-1 sm:gap-0"
    >
      <div
        className="absolute top-[8rem] bottom-[8rem] w-1/2 h-full 
        md:w-3/4 md:-left-[20%]
      "
      >
        <Image src={althletsSrc} alt="AlthletsImage" fill objectFit="contain" />
      </div>
      {map(contents.ATHLETS, (block, index) => {
        const firstItem = index === 0;
        return (
          <BlockContent
            key={block.id}
            headline={firstItem ? 'ATHLETS' : ''}
            config={block.config}
            topic={block.topic}
            content={block.content}
          />
        );
      })}
    </div>
  );
}

export default Main;
