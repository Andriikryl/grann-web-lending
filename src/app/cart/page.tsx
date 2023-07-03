"use client";

import React from "react";
import { ShoppingCart } from "../components/Cart/ShoppingCart";

export default function page() {
  return (
    <div>
      <ShoppingCart isOpen={true} />
    </div>
  );
}
