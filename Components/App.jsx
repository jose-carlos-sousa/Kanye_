"use client";
import Image from 'next/image'
import HomePage from "./Home"
import { useState } from 'react'
import QuotePage from "./QuotePage"

export default function App() {
  const [estado, mudarEstado] = useState(0);

 
  const meterUm = () => {
    mudarEstado(1); // Use mudarEstado to change the estado state variable
  };

  return estado ? <QuotePage func={meterUm} /> : <HomePage func={meterUm} />;
}
