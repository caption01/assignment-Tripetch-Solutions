const fontSizeMap: Record<string, string> = {
  content: 'text-[2.0rem]',
  topic: 'text-[3.6rem]',
  headLine: 'text-[9rem]',
};

const textColorMap: Record<string, string> = {
  white: 'text-white',
  black: 'text-black',
  darkGray: 'text-darkGray',
  whiteGray: 'text-whiteGray',
};

const letterSpaceMap: Record<string, string> = {
  topic: 'tracking-[0.15rem]',
  content: 'tracking-normal',
  headLine: 'tracking-normal',
};

function Typography(props: any) {
  const { children, size = 'content', color = 'black', space = 'content', ...restProps } = props;

  const fontSize = fontSizeMap[size] || fontSizeMap.content;
  const textColor = textColorMap[color] || textColorMap.black;
  const letterSpace = letterSpaceMap[space] || textColorMap.content;

  return (
    <div className={`${fontSize} ${textColor} ${letterSpace}`} {...restProps}>
      {children}
    </div>
  );
}

export default Typography;
