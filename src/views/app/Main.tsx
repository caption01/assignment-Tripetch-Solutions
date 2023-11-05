import { map, uniqueId } from 'lodash';
import { useScreen, ScreenType } from '@/hooks';

import BlockContent from './components/BlockContent';

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

  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-4 sm:grid-cols-1 sm:gap-0">
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
