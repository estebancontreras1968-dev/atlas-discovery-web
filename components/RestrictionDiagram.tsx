// Diagrama de firma — Atlas Discovery™
// Línea punteada: capacidad potencial (picos y valles).
// Línea sólida plana: flujo efectivo del sistema, capado al nivel del punto más bajo.
// El punto de restricción se marca con un círculo signal y la etiqueta "RESTRICCIÓN IDENTIFICADA".

const VALUES = [0.55, 0.78, 0.3, 0.85, 0.35, 0.92, 0.2, 0.75, 0.5];

const WIDTH = 560;
const HEIGHT = 200;
const PAD_X = 24;
const TOP = 20;
const AXIS_Y = 160;

const STEP = (WIDTH - PAD_X * 2) / (VALUES.length - 1);

const points = VALUES.map((v, i) => ({
  x: PAD_X + i * STEP,
  y: TOP + (1 - v) * (AXIS_Y - TOP),
}));

const restrictionIndex = points.reduce(
  (minI, p, i, arr) => (p.y > arr[minI].y ? i : minI),
  0
);
const restriction = points[restrictionIndex];

const dashedPath = points.map((p) => `${p.x},${p.y}`).join(" ");
const labelAnchor =
  restriction.x < WIDTH * 0.33
    ? "start"
    : restriction.x > WIDTH * 0.67
      ? "end"
      : "middle";

export default function RestrictionDiagram({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      role="img"
      aria-label="Diagrama que muestra la capacidad potencial de una empresa (línea punteada, con picos y valles) frente al flujo efectivo del sistema (línea sólida plana), limitado por la restricción dominante"
    >
      {!compact && (
        <g className="font-mono" style={{ fontSize: 9.5, letterSpacing: "0.06em" }}>
          <line x1={PAD_X} y1={34} x2={PAD_X + 20} y2={34} className="stroke-slate-light" strokeWidth={1.5} strokeDasharray="3 3" />
          <text x={PAD_X + 28} y={37.5} className="fill-slate">CAPACIDAD POTENCIAL</text>

          <line x1={PAD_X + 178} y1={34} x2={PAD_X + 198} y2={34} className="stroke-ink" strokeWidth={1.5} />
          <text x={PAD_X + 206} y={37.5} className="fill-slate">FLUJO EFECTIVO DEL SISTEMA</text>
        </g>
      )}

      <line
        x1={PAD_X - 4}
        y1={AXIS_Y}
        x2={WIDTH - PAD_X + 4}
        y2={AXIS_Y}
        className="stroke-line"
        strokeWidth={1}
      />

      <polyline
        points={dashedPath}
        fill="none"
        className="stroke-slate-light"
        strokeWidth={1.75}
        strokeDasharray="5 5"
        strokeLinejoin="round"
      />

      <line
        x1={PAD_X}
        y1={restriction.y}
        x2={WIDTH - PAD_X}
        y2={restriction.y}
        className="stroke-ink"
        strokeWidth={2.25}
        strokeLinecap="round"
      />

      <line
        x1={restriction.x}
        y1={restriction.y - 22}
        x2={restriction.x}
        y2={restriction.y - 6}
        className="stroke-signal"
        strokeWidth={1}
        strokeDasharray="2 3"
        opacity={0.7}
      />
      <circle
        cx={restriction.x}
        cy={restriction.y}
        r={5.5}
        className="fill-signal"
      />
      <circle
        cx={restriction.x}
        cy={restriction.y}
        r={9.5}
        className="fill-none stroke-signal animate-pulseMark"
        strokeWidth={1.25}
      />

      <text
        x={restriction.x}
        y={restriction.y - 28}
        textAnchor={labelAnchor}
        className="fill-signal font-mono font-medium"
        style={{ fontSize: 10.5, letterSpacing: "0.05em" }}
      >
        RESTRICCIÓN IDENTIFICADA
      </text>

      {!compact && (
        <text
          x={WIDTH - PAD_X}
          y={AXIS_Y + 24}
          textAnchor="end"
          className="fill-slate-light font-mono"
          style={{ fontSize: 9, letterSpacing: "0.08em" }}
        >
          OPERACIÓN EN EL TIEMPO
        </text>
      )}
    </svg>
  );
}
