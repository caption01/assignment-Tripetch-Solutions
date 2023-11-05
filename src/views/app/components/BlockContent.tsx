import { Topic, Content } from './common';

type BlockContent = {
  config?: any;
  topic?: ContentProps;
  content?: ContentProps;
};

type ContentProps = {
  order?: number;
  body: string;
  config?: any;
};

function BlockContent({ config = {}, topic, content }: BlockContent) {
  const { bgColor } = config;

  return (
    <div
      className={`
        ${bgColor} pt-[6rem] pb-[6rem] pl-[50%]
        md:pt-[5rem] md:pb-[6rem] md:pl-[30%]
        sm:px-[3rem] sm:py-[6rem] sm:w-full sm:h-full
        `}
    >
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
