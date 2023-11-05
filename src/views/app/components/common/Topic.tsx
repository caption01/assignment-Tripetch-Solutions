import { Typography } from '@/components/common';

const underLineColorMap: Record<string, string> = {
  white: 'after:bg-white',
  darkPurple: 'after:bg-darkPurple',
};

function Topic(props: any) {
  const { children, order, config = {} } = props;
  const { underLineColor: lineColor } = config;

  const underLineColor = underLineColorMap[lineColor];

  return (
    <div className="flex gap-[1rem]">
      <div
        className={`text-[1.8rem] relative pt-[0.5rem] font-normal
        after:absolute after:left-0 after:bottom-[20%] 
        ${underLineColor} after:content-[''] after:w-full 
        after:h-[0.5rem] after:rounded-[0.25rem]`}
      >
        {`0${order}`}
      </div>
      <Typography size="topic" color="darkGray" space="topic">
        {children}
      </Typography>
    </div>
  );
}

export default Topic;
