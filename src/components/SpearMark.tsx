type SpearMarkProps = {
  className?: string;
  decorative?: boolean;
};

const SpearMark = ({ className = 'spear-mark', decorative = false }: SpearMarkProps) => (
  <svg
    className={className}
    viewBox="0 0 120 260"
    role={decorative ? undefined : 'img'}
    aria-hidden={decorative ? 'true' : undefined}
    aria-label={decorative ? undefined : 'Símbolo minimalista de lanza Azul Code Lab'}
  >
    <path className="spear-tip" d="M60 8 L80 68 L60 58 L40 68 Z" />
    <circle className="spear-ring" cx="60" cy="80" r="9" />
    <path className="spear-handle" d="M54 89 H66 L64 106 H56 Z" />
    <line className="spear-core" x1="60" y1="106" x2="60" y2="240" />

    <path className="spear-side" d="M48 112 V178 L39 191 V240" />
    <path className="spear-side" d="M72 112 V164 L81 177 V223" />
    <line className="spear-side" x1="52" y1="112" x2="52" y2="240" />
    <line className="spear-side" x1="68" y1="112" x2="68" y2="240" />

    <circle className="spear-node" cx="39" cy="190" r="3.5" />
    <circle className="spear-node" cx="81" cy="177" r="3.5" />

    <path className="spear-brace" d="M22 193 C14 193 14 175 22 175" />
    <path className="spear-brace" d="M98 193 C106 193 106 175 98 175" />
  </svg>
);

export default SpearMark;
