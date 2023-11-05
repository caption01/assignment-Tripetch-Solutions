import { Typography } from '@/components/common';

function Content(props: any) {
  const { children, config = {} } = props;
  const { fontColor = 'black' } = config;
  return (
    <Typography size="content" color={fontColor}>
      {children}
    </Typography>
  );
}

export default Content;
