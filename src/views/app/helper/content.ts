import { StaticImageData } from 'next/image';

import { SCREEN_TYPE } from '@/hooks';

import AthletsDesktop from '@public/assets/athlets-desktop.png';
import AthletsTablet from '@public/assets/athlets-tablet.png';
import AthletsMoblie from '@public/assets/athlets-mobile.png';

import PlayerDesktop from '@public/assets/players-desktop.png';
import PlayerTable from '@public/assets/players-tablet.png';
import PlayerMobile from '@public/assets/players-mobile.png';

const { DESKTOP, TABLET, PHONE, IDLE } = SCREEN_TYPE;

export const AlthletsImageMap: Record<string, StaticImageData> = {
  [DESKTOP]: AthletsDesktop,
  [TABLET]: AthletsTablet,
  [PHONE]: AthletsMoblie,
  [IDLE]: AthletsDesktop,
};

export const PlayerImageMap: Record<string, StaticImageData> = {
  [DESKTOP]: PlayerDesktop,
  [TABLET]: PlayerTable,
  [PHONE]: PlayerMobile,
  [IDLE]: PlayerDesktop,
};

export const contents: Record<string, any[]> = {
  ATHLETS: [
    {
      id: 'ATHLETS-1',
      config: {
        bgColor: 'bg-white',
      },
      topic: {
        order: 1,
        body: 'CONNECTION',
        config: {
          dotColor: 'bg-darkPurple',
          afterUnderLineColor: 'after:bg-darkPurple',
          afterFontColor: 'text-black',
        },
      },
      content: {
        body: 'Connect with coaches directly, you can ping coaches to view profile.',
        config: {
          fontColor: 'text-black',
        },
      },
    },
    {
      id: 'ATHLETS-2',
      config: {
        bgColor: 'bg-whitePurple',
      },
      topic: {
        order: 2,
        body: 'COLLABORATION',
        config: {
          dotColor: 'bg-darkPurple',
          afterUnderLineColor: 'after:bg-darkPurple',
          afterFontColor: 'text-black',
        },
      },
      content: {
        body: 'Work with other student athletes to increase visibility. When you share and like other players videos it will increase your visibility as a player. This is the team work aspect to Surface 1.',
        config: {
          fontColor: 'text-black',
        },
      },
    },
    {
      id: 'ATHLETS-3',
      config: {
        bgColor: 'bg-darkPurple',
      },
      topic: {
        order: 3,
        body: 'GROWTH',
        config: {
          dotColor: 'bg-white',
          afterUnderLineColor: 'after:bg-white',
          afterFontColor: 'text-black',
        },
      },
      content: {
        body: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc.',
        config: {
          fontColor: 'text-white',
        },
      },
    },
  ],
  PLAYERS: [
    {
      id: 'PLAYERS-1',
      config: {
        bgColor: 'bg-white',
      },
      topic: {
        order: 1,
        body: 'CONNECTION',
        config: {
          dotColor: 'bg-darkPurple',
          afterUnderLineColor: 'after:bg-darkPurple',
          afterFontColor: 'text-black',
        },
      },
      content: {
        body: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
        config: {
          fontColor: 'text-black',
        },
      },
    },
    {
      id: 'PLAYERS-2',
      config: {
        bgColor: 'bg-whitePurple',
      },
      topic: {
        order: 2,
        body: 'COLLABORATION',
        config: {
          dotColor: 'bg-darkPurple',
          afterUnderLineColor: 'after:bg-darkPurple',
          afterFontColor: 'text-black',
        },
      },
      content: {
        body: 'Work with recruiter to increase your chances of findingtalented athlete.',
        config: {
          fontColor: 'text-black',
        },
      },
    },
    {
      id: 'PLAYERS-3',
      config: {
        bgColor: 'bg-blackPurple',
      },
      topic: {
        order: 3,
        body: 'GROWTH',
        config: {
          dotColor: 'bg-white',
          afterUnderLineColor: 'after:bg-white',
          afterFontColor: 'text-pinkPurple',
        },
      },
      content: {
        body: 'Save your time, recruit proper athlets for your team.',
        config: {
          fontColor: 'text-white',
        },
      },
    },
  ],
};
