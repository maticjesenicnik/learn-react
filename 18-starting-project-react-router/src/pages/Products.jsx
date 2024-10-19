import React from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 5, title: "Wireless Headphones", description: "High-quality wireless headphones with noise cancellation." },
  { id: "p2", price: 72, title: "Smartwatch", description: "Feature-rich smartwatch with fitness tracking." },
  { id: "p3", price: 6, title: "Bluetooth Speaker", description: "Portable Bluetooth speaker with excellent sound quality." },
  { id: "p4", price: 32, title: "Gaming Mouse", description: "Ergonomic gaming mouse with customizable buttons." },
  { id: "p5", price: 72, title: "LED Monitor", description: "27-inch LED monitor with full HD resolution." },
  { id: "p6", price: 88, title: "External Hard Drive", description: "1TB external hard drive with fast data transfer." },
  { id: "p7", price: 41, title: "Smartphone Stand", description: "Adjustable smartphone stand for hands-free use." },
  { id: "p8", price: 83, title: "USB-C Hub", description: "Multiport USB-C hub with HDMI and USB 3.0 ports." },
  { id: "p9", price: 92, title: "Portable Charger", description: "Compact portable charger with 10,000mAh capacity." },
  { id: "p10", price: 24, title: "Noise-Canceling Earbuds", description: "True wireless earbuds with active noise cancellation." },
  { id: "p11", price: 54, title: "Laptop Sleeve", description: "Slim and protective laptop sleeve for 13-inch devices." },
  { id: "p12", price: 77, title: "Digital Camera", description: "Compact digital camera with 20MP resolution." },
  { id: "p13", price: 5, title: "Fitness Tracker", description: "Water-resistant fitness tracker with heart rate monitor." },
  { id: "p14", price: 72, title: "Mechanical Keyboard", description: "Mechanical keyboard with customizable RGB lighting." },
  { id: "p15", price: 60, title: "Smart Light Bulb", description: "Wi-Fi-enabled smart light bulb with voice control." },
  { id: "p16", price: 30, title: "Action Camera", description: "4K action camera with waterproof housing." },
  { id: "p17", price: 42, title: "Wireless Charger", description: "Fast wireless charger for smartphones and wearables." },
  { id: "p18", price: 97, title: "Gaming Controller", description: "Wireless gaming controller compatible with multiple platforms." },
  { id: "p19", price: 57, title: "Tablet Stand", description: "Adjustable tablet stand for comfortable viewing angles." },
  { id: "p20", price: 42, title: "Smart Thermostat", description: "Smart thermostat with energy-saving features." },
];

export default function Products() {
  return (
    <>
      <h1>The Products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <li>
            <Link key={product.id} to={product.id}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
