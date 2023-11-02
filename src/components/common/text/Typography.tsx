const fontSizeMap: Record<string, string> = {
  content: 'text-[1.6rem]',
  topic: 'text-[3rem]',
  headLine: 'text-[5rem]',
};

const textColorMap: Record<string, string> = {
  black: 'text-black',
  darkGray: 'text-dark-gray',
  whiteGray: 'text-white-gray',
};

function Typography(props: any) {
  const { children, size = 'content', color = 'black', ...restProps } = props;

  const fontSize = fontSizeMap[size] || fontSizeMap.content;
  const textColor = textColorMap[color] || textColorMap.black;

  return (
    <div className={`${fontSize} ${textColor}`} {...restProps}>
      {children}
    </div>
  );
}

export default Typography;
