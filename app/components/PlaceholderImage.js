export default function PlaceholderImage({ label, className = '', hideLabel = false }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0D2144 55%, #112040 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(137,207,240,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(137,207,240,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center${hideLabel ? ' opacity-0' : ''}`}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#89CFF0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-3 opacity-50"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span
          className="text-xs font-semibold uppercase tracking-[0.18em] mb-1.5"
          style={{ color: '#89CFF0', opacity: 0.7 }}
        >
          Placeholder
        </span>
        <p
          className="text-xs leading-relaxed max-w-[200px]"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
