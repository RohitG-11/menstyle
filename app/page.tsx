"use client";

import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      product: product,
    };

    await fetch("/api/interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Interest submitted successfully!");
    form.reset();
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Men's Fashion</h1>

      {/* Products */}
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <img src="/images/shirt.jpg" width="200" />
          <h3>Men Shirt</h3>
          <p>Cotton casual shirt</p>
          <p>Price: ₹999</p>
          <button onClick={() => setProduct("Men Shirt")}>
            I'm Interested
          </button>
        </div>

        <div>
          <img src="/images/tshirt.jpg" width="200" />
          <h3>Men T-Shirt</h3>
          <p>Comfortable round neck</p>
          <p>Price: ₹699</p>
          <button onClick={() => setProduct("Men T-Shirt")}>
            I'm Interested
          </button>
        </div>

        <div>
          <img src="/images/jeans.jpg" width="200" />
          <h3>Men Jeans</h3>
          <p>Slim fit denim</p>
          <p>Price: ₹1499</p>
          <button onClick={() => setProduct("Men Jeans")}>
            I'm Interested
          </button>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* Interest Form */}
      <h2>Interested in: {product || "Select a product above"}</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          name="phone"
          type="text"
          placeholder="Mobile Number"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <button type="submit">Submit Interest</button>
      </form>
    </main>
  );
}
