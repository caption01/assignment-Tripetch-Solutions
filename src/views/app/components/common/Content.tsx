import { Typography } from '@/components/common';

function Content(props: any) {
  const { children } = props;
  return (
    <Typography size="content" color="black">
      {children}
    </Typography>
  );
}

export default Content;
