interface PixelDividerProps {
  /** Cor da seção de cima: os pixels "se dissolvem" para a seção de baixo. */
  color: string;
  /** Semente fixa para o padrão ser idêntico no servidor e no cliente. */
  seed?: number;
  flip?: boolean;
}

const COLS = 160;
const ROWS = 8;

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Faixa pixelada (dither) igual à transição de seções do site. */
export function PixelDivider({ color, seed = 7, flip = false }: PixelDividerProps) {
  const rand = mulberry32(seed);
  const cells: { x: number; y: number }[] = [];
  for (let y = 0; y < ROWS; y++) {
    const density = Math.pow(1 - y / ROWS, 1.6);
    for (let x = 0; x < COLS; x++) {
      if (rand() < density) cells.push({ x, y });
    }
  }
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`block h-24 w-full ${flip ? "-scale-y-100" : ""}`}
      viewBox={`0 0 ${COLS} ${ROWS}`}
      preserveAspectRatio="xMidYMin slice"
      shapeRendering="crispEdges"
    >
      <g fill={color}>
        {cells.map((c) => (
          <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" />
        ))}
      </g>
    </svg>
  );
}
