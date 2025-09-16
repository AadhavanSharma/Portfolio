interface GridProps {
  /**
   * Color of the grid
   */
  color?: string;

  /**
   * Size of the grid in pixels
   */
  size?: number;

  /**
   * Content of the component
   */
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;

  ref?: React.ForwardedRef<HTMLDivElement|null>;
  deg:number|0;
}

function Placeholder({ size = 20 }: Pick<GridProps, "size">) {
  const widthSpread = 20;
  const heightSpread = 10;
  return (
    <div
      style={{
        // +1 to account for the border
        width: `${widthSpread * size + 1}px`,
        height: `${heightSpread * size + 1}px`,
      }}
      className="flex max-h-full max-w-full items-center justify-center"
    >
      <div className="rounded bg-gray-50 px-4 py-2 h-full w-full"></div>
    </div>
  );
}

export default function Grid({
  color = "#cacaca",
  deg = 0 ,
  size = 20,
  children,
  className,
  style = {
    backgroundColor: "white",
  },
  ref,
}: GridProps) {

  const backgroundImage = deg === 45
    ? `
      repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 1px, transparent ${size}px),
      repeating-linear-gradient(-45deg, ${color} 0, ${color} 1px, transparent 1px, transparent ${size}px)
    `
    : `
      linear-gradient(${color} 2px, transparent 1px),
      linear-gradient(to right, ${color} 3px, transparent 1px)
    `;

  const backgroundSize = deg === 45
    ? `${size * 50}px ${size * 50}px`
    : `${size}px ${size}px`;

  return (
    <div ref = {ref}
      style={{
        ...style,
        // backgroundImage: `linear-gradient(${color} 2px, transparent 1px), linear-gradient(to right, ${color} 3px, transparent 1px)`,
        // backgroundImage: `
        //   repeating-linear-gradient(45deg, ${color} 0, ${color} 2px, transparent 2px, transparent ${size}px),
        //   repeating-linear-gradient(-45deg, ${color} 0, ${color} 2px, transparent 2px, transparent ${size}px)
        // `,
        // backgroundSize: `${size*55}px ${size*55}px`,
        backgroundImage: backgroundImage,
        backgroundSize: backgroundSize,
      }}
      className={className}
    >
      {children ?? <Placeholder size={size} />}
    </div>
  );
}
