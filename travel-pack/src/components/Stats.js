export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentp = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentp === 100
          ? `You have got everything in your pack, you're ready to go!`
          : `you have ${items.length} items on your list, and you already packed
        ${numPacked} which is ${percentp}% of your items.`}
      </em>
    </footer>
  );
}
