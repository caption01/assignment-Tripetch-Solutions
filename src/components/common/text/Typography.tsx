function Typography(props: any) {
  const {
    fontSize = 'text-[1.6rem]',
    fontColor = 'text-black',
    letterSpace = 'tracking-normal',
    children,
    ...restProps
  } = props;

  return (
    <div className={`${fontSize} ${fontColor} ${letterSpace}`} {...restProps}>
      {children}
    </div>
  );
}

export default Typography;
