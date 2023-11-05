import { ScreenContext } from '@/contexts';
import { SCREEN_TYPE } from '@/hooks';
import { Typography } from '@/components/common';

const { useScreenContext } = ScreenContext;

const fontSizeMap = {
  [SCREEN_TYPE.DESKTOP]: 'text-[3.6rem]',
  [SCREEN_TYPE.TABLET]: 'text-[3.6rem]',
  [SCREEN_TYPE.PHONE]: 'text-[2.8rem]',
  [SCREEN_TYPE.IDLE]: 'text-[3.6rem]',
};

function Topic(props: any) {
  const { screen } = useScreenContext();
  const { children, order, config = {} } = props;
  const { underLineColor } = config;

  const fontSize = fontSizeMap[screen];

  return (
    <div className="flex gap-[1rem]">
      <div
        className={`
          text-[1.8rem] relative pt-[0.5rem] font-normal
          after:absolute after:left-0 after:bottom-[20%] 
          ${underLineColor} after:content-[''] after:w-full 
          after:h-[0.5rem] after:rounded-[0.25rem]

          sm:text-[1.4rem] sm:after:h-[0.4rem]
        `}
      >
        {`0${order}`}
      </div>
      <Typography fontSize={fontSize} fontColor="text-darkGray" letterSpace="tracking-[0.15rem]">
        {children}
      </Typography>
    </div>
  );
}

export default Topic;
