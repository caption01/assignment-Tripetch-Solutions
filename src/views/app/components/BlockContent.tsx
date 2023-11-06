import { Topic, Content } from './common';

type BlockContent = {
  position: string;
  config?: any;
  topic?: ContentProps;
  content?: ContentProps;
};

type ContentProps = {
  order?: number;
  body: string;
  config?: any;
};

function BlockContent({ position = 'right', config = {}, topic, content }: BlockContent) {
  const { bgColor } = config;

  const layout: Record<string, string> = {
    right: `${bgColor} pt-[6rem] pb-[6rem] pl-[50%] 
      md:pt-[5rem] md:pb-[6rem] md:pl-[40%]
      sm:px-[3rem] sm:py-[6rem] sm:w-full sm:h-full
      `,
    left: `${bgColor} pt-[6rem] pb-[6rem] pl-[10%]
      md:pt-[5rem] md:pb-[6rem] md:pl-[5%]
      sm:px-[3rem] sm:py-[6rem] sm:w-full sm:h-full
      `,
  };

  const layoutPosition = layout[position];

  return (
    <div className={layoutPosition}>
      {topic ? (
        <div className="mb-[2.1rem]">
          <Topic order={topic.order} config={topic.config}>
            {topic.body}
          </Topic>
        </div>
      ) : null}
      {content ? (
        <div className="max-w-[120ch] md:max-w-[80ch]">
          <Content config={content.config}>{content.body}</Content>
        </div>
      ) : null}
    </div>
  );
}

export default BlockContent;
