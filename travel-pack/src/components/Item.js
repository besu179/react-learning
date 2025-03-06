export function Item({ item, onDeleteitem, onHandleToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onHandleToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteitem(item.id)}>❌</button>
    </li>
  );
}
