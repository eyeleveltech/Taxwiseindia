export default function SvgIcon({
  id,
  className = '',
  style,
}: {
  id: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const classNames = className.split(/\s+/).filter(Boolean);
  if (!classNames.includes('i')) {
    classNames.unshift('i');
  }
  return (
    <svg className={classNames.join(' ')} style={style} aria-hidden="true" focusable="false">
      <use href={`#${id}`} />
    </svg>
  );
}
