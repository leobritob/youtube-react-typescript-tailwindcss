type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export function HamburgerIcon({
  width = 25,
  height = 17,
  fill = '#333333',
}: Props) {
  return (
    <div style={{ width, height }}>
      <svg
        style={{ width: 'inherit', height: 'inherit' }}
        viewBox="0 0 25 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="25" height="3" fill={fill} />
        <rect y="7" width="25" height="3" fill={fill} />
        <rect y="14" width="25" height="3" fill={fill} />
      </svg>
    </div>
  );
}
