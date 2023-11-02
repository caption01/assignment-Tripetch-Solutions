import { Headline, Topic, Content } from './common';

function BlockContent({ headline = '', topic = '', text = '' }) {
  return (
    <div>
      <Headline>{headline}</Headline>
      <Topic>{topic}</Topic>
      <Content>{text}</Content>
    </div>
  );
}

export default BlockContent;
