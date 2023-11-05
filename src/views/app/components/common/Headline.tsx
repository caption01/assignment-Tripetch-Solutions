import { ScreenContext } from '@/contexts';
import { SCREEN_TYPE } from '@/hooks';
import { Typography } from '@/components/common';

const { useScreenContext } = ScreenContext;

const fontSizeMap = {
  [SCREEN_TYPE.DESKTOP]: 'text-[9rem]',
  [SCREEN_TYPE.TABLET]: 'text-[9rem]',
  [SCREEN_TYPE.PHONE]: 'text-[5rem]',
  [SCREEN_TYPE.IDLE]: 'text-[9rem]',
};

function Headline(props: any) {
  const { screen } = useScreenContext();

  const fontSize = fontSizeMap[screen];

  const { children } = props;
  return (
    <Typography fontSize={fontSize} letterSpace={'tracking-normal'} fontColor="text-whiteGray">
      {children}
    </Typography>
  );
}

export default Headline;
