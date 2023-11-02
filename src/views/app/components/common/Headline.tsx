import { Typography } from '@/components/common';

function Headline(props: any) {
  const { children } = props;
  return (
    <Typography size="headLine" color="whiteGray">
      {children}
    </Typography>
  );
}

export default Headline;
