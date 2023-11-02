import BlockContent from './components/BlockContent';

const contents = {
  headline: 'ATHLETS',
  topic: 'CONNECTION',
  text: 'Connect with coaches directly, you can ping coaches to view profile.',
};

function Main() {
  return (
    <div>
      <BlockContent headline={contents.headline} topic={contents.topic} text={contents.text} />
    </div>
  );
}

export default Main;
