'use client';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [product_name, setProductName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_name, amount: parseFloat(amount) }),
    });
    alert('Inserted!');
    setProductName('');
    setAmount('');
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Add Sale</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Sale</button>
      </form>
    </main>
  );
}
