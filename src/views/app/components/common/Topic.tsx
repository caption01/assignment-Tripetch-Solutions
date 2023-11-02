import { Typography } from '@/components/common';

function Topic(props: any) {
  const { children } = props;
  return (
    <Typography size="topic" color="darkGray">
      {children}
    </Typography>
  );
}

export default Topic;
