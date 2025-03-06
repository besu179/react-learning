import { useState } from "react";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to delete all the items?')

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteitem={handleDeleteItem}
        onHandleToggle={handleToggleItem}
        onHandleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}


