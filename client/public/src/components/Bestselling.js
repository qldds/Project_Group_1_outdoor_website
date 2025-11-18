import React from 'react';

function BestSelling() {
  const items = [
    { name: "Tent", price: "$120" },
    { name: "Sleeping Bag", price: "$60" },
    { name: "Backpack", price: "$80" }
  ];

  return (
    <div className="page">
      <h2>Best Selling Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestSelling;
