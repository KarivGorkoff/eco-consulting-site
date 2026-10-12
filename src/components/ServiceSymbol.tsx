import type { ReactNode } from "react";
import type { ServiceSymbolName } from "../lib/content";

/*
  Service icons drawn as the schematic symbols an electrical drawing would use:
    transformer  two-winding transformer
    generator    generator
    antenna      antenna
    plc          programmable logic controller (ISA-5.1)
    bell         bell
    pv           photovoltaic cell
  Each sits on a 48-unit-high canvas with its left edge at zero, so the symbol
  lines up with the heading underneath it.
*/
const symbols: Record<ServiceSymbolName, { width: number; art: ReactNode }> = {
  transformer: {
    width: 20,
    art: (
      <>
        <path d="M10 3v7M10 39v6" />
        <circle cx="10" cy="19" r="9" />
        <circle cx="10" cy="30" r="9" />
      </>
    ),
  },
  generator: {
    width: 32,
    art: (
      <>
        <path d="M16 7v8" />
        <circle cx="16" cy="30" r="15" />
        <text
          x="16"
          y="30.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="17"
          fontWeight="600"
          fill="currentColor"
          stroke="none"
        >
          G
        </text>
      </>
    ),
  },
  antenna: {
    width: 30,
    art: <path d="M15 45V5M1 5l14 20L29 5" />,
  },
  plc: {
    width: 34,
    art: (
      <>
        <rect x="1" y="13" width="32" height="32" />
        <path d="M17 13l16 16-16 16L1 29zM1 29h32" />
      </>
    ),
  },
  bell: {
    width: 32,
    art: <path d="M1 31a15 15 0 0 1 30 0zM9 31v14M23 31v14" />,
  },
  pv: {
    width: 41,
    art: (
      <>
        <path d="M26 5v16M12 21h28M26 29v16" />
        <path d="M19 29h14" strokeWidth="3.5" />
        <path d="M1 6l9 9M10 10v5H5M9 2l9 9M18 6v5h-5" />
      </>
    ),
  },
};

export default function ServiceSymbol({ name, size = 60 }: { name: ServiceSymbolName; size?: number }) {
  const { width, art } = symbols[name];
  return (
    <svg
      viewBox={`0 0 ${width} 48`}
      height={size}
      width={(width * size) / 48}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      focusable="false"
    >
      {art}
    </svg>
  );
}
