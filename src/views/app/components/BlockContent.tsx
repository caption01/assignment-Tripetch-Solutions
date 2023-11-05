import { Headline, Topic, Content } from './common';

type BlockContent = {
  headline: string;
  config?: any;
  topic?: ContentProps;
  content?: ContentProps;
};

type ContentProps = {
  order?: number;
  body: string;
  config?: any;
};

const blockBgColorMap: Record<string, string> = {
  white: 'bg-white',
  whitePurple: 'bg-whitePurple',
  darkPurple: 'bg-darkPurple',
};

function BlockContent({ headline = '', config = {}, topic, content }: BlockContent) {
  const { bgColor: blockBgColor } = config;

  const bgColor = blockBgColorMap[blockBgColor];

  return (
    <div className={`${bgColor} p-[6rem]`}>
      {headline ? (
        <div className="mb-[6rem]">
          <Headline>{headline}</Headline>
        </div>
      ) : null}
      {topic ? (
        <div className="mb-[2.1rem]">
          <Topic order={topic.order} config={topic.config}>
            {topic.body}
          </Topic>
        </div>
      ) : null}
      {content ? (
        <div>
          <Content config={content.config}>{content.body}</Content>
        </div>
      ) : null}
    </div>
  );
}

export default BlockContent;
