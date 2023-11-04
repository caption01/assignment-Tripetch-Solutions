import { useScreen, ScreenType } from '@/hooks';

import BlockContent from './components/BlockContent';

const contents = {
  headline: 'ATHLETS',
  topic: 'CONNECTION',
  text: 'Connect with coaches directly, you can ping coaches to view profile.',
};

function Main() {
  const { screen } = useScreen();

  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-4 sm:grid-cols-1 sm:gap-0">
      <BlockContent headline={contents.headline} topic={contents.topic} text={contents.text} />
      <BlockContent headline={contents.headline} topic={contents.topic} text={contents.text} />
      <BlockContent headline={contents.headline} topic={contents.topic} text={contents.text} />
    </div>
  );
}

export default Main;
