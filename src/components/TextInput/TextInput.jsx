import './TextInput.css';

export default function TextInput({ label, type = 'text', id, placeholder, value, onChange, readOnly = false }) {
  return (
    <div className="text-input-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  );
}
