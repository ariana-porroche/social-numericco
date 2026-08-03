import './Card.css';

export default function Card({ title, subtitle, children, className = '' }) {
  return (
    <div className={`card ${className}`.trim()}>
      {title && <h1 className="card-title">{title}</h1>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}
