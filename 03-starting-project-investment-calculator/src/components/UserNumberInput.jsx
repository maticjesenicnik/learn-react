export default function UserNumberInput({ label, id, value, name, onChange }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" value={value} onChange={event => onChange(name, event.target.value)} required />
    </p>
  );
}
