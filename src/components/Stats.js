import React from 'react';

export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding some items to your packing list🎈
      </footer>
    );
  const numberItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = (packedItems / numberItems) * 100;
  return (
    <footer className="stats">
      <div>
        {percentage === 100 ? (
          <em>Done with your Packing, congratulations🎉,Have Safe Journey</em>
        ) : (
          <em>
            💼 You have {numberItems} items on your list , and you already
            packed {packedItems} items {percentage}%
          </em>
        )}
      </div>
    </footer>
  );
}
