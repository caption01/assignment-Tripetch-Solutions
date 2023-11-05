import { ScreenContext } from '@/contexts';
import { SCREEN_TYPE } from '@/hooks';
import { Typography } from '@/components/common';

const { useScreenContext } = ScreenContext;

const fontSizeMap = {
  [SCREEN_TYPE.DESKTOP]: 'text-[2.0rem]',
  [SCREEN_TYPE.TABLET]: 'text-[1.8rem]',
  [SCREEN_TYPE.PHONE]: 'text-[1.5rem]',
  [SCREEN_TYPE.IDLE]: 'text-[2.0rem]',
};

function Content(props: any) {
  const { screen } = useScreenContext();
  const { children, config = {} } = props;
  const { fontColor = 'black' } = config;

  const fontSize = fontSizeMap[screen];

  return (
    <Typography fontSize={fontSize} letterSpace={'tracking-normal'} fontColor={fontColor}>
      {children}
    </Typography>
  );
}

export default Content;
