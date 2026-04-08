const SpearMark = () => (
  <svg
    className="spear-mark"
    viewBox="0 0 88 220"
    role="img"
    aria-label="Símbolo minimalista de lanza"
  >
    <path d="M44 0 L58 48 L44 40 L30 48 Z" className="spear-tip" />
    <line x1="44" y1="40" x2="44" y2="210" className="spear-core" />
    <line x1="35" y1="58" x2="35" y2="190" className="spear-side" />
    <line x1="53" y1="58" x2="53" y2="170" className="spear-side" />
    <circle cx="53" cy="170" r="3" className="spear-node" />
  </svg>
);

export default SpearMark;
