import './InfoField.css';

export default function InfoField({ label, value, icon }) {
  return (
    <div className="info-field">
      <div className="info-field-label">
        {icon && <span className="info-field-icon">{icon}</span>}
        <span>{label}</span>
      </div>
      <div className="info-field-value">
        {value}
      </div>
    </div>
  );
}
