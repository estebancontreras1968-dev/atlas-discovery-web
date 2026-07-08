type Column = {
  label: string;
  height: number;
  constrained?: boolean;
};

const columns: Column[] = [
  { label: "MARKETING", height: 96 },
  { label: "VENTAS", height: 118 },
  { label: "ENTREGA", height: 60, constrained: true },
  { label: "FINANZAS", height: 104 },
  { label: "EQUIPO", height: 88 },
  { label: "LIDERAZGO", height: 128 },
];

const BASELINE = 176;
const REQUIRED_LEVEL = 176 - 118; // umbral de capacidad requerida
const COL_WIDTH = 76;
const GAP = 28;
const START_X = 20;

export default function ChainDiagram({ className = "" }: { className?: string }) {
  const width = START_X * 2 + columns.length * COL_WIDTH + (columns.length - 1) * GAP;

  return (
    <svg
      viewBox={`0 0 ${width} 216`}
      className={className}
      role="img"
      aria-label="Diagrama de las áreas de un negocio mostrado como una cadena de capacidad, donde una función limita el crecimiento del conjunto"
    >
      {/* umbral de capacidad requerida */}
      <line
        x1={START_X - 6}
        y1={REQUIRED_LEVEL}
        x2={width - START_X + 6}
        y2={REQUIRED_LEVEL}
        className="stroke-line"
        strokeWidth={1}
        strokeDasharray="3 5"
      />
      <text
        x={width - START_X + 6}
        y={REQUIRED_LEVEL - 8}
        textAnchor="end"
        className="fill-slate font-mono"
        style={{ fontSize: 9, letterSpacing: "0.08em" }}
      >
        CRECIMIENTO OBJETIVO
      </text>

      {/* línea base */}
      <line
        x1={START_X - 6}
        y1={BASELINE}
        x2={width - START_X + 6}
        y2={BASELINE}
        className="stroke-ink"
        strokeWidth={1}
      />

      {columns.map((col, i) => {
        const x = START_X + i * (COL_WIDTH + GAP);
        const y = BASELINE - col.height;
        return (
          <g key={col.label}>
            <rect
              x={x}
              y={y}
              width={COL_WIDTH}
              height={col.height}
              rx={3}
              className={col.constrained ? "fill-signal" : "fill-ink"}
              opacity={col.constrained ? 1 : 0.88}
            />
            {col.constrained && (
              <>
                <rect
                  x={x - 5}
                  y={y - 5}
                  width={COL_WIDTH + 10}
                  height={col.height + 10}
                  rx={5}
                  className="fill-none stroke-signal animate-pulseMark"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                />
                <text
                  x={x + COL_WIDTH / 2}
                  y={y - 16}
                  textAnchor="middle"
                  className="fill-signal font-mono font-medium"
                  style={{ fontSize: 10, letterSpacing: "0.04em" }}
                >
                  RESTRICCIÓN
                </text>
              </>
            )}
            <text
              x={x + COL_WIDTH / 2}
              y={BASELINE + 20}
              textAnchor="middle"
              className={col.constrained ? "fill-signal font-mono" : "fill-slate font-mono"}
              style={{ fontSize: 9.5, letterSpacing: "0.06em" }}
            >
              {col.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
