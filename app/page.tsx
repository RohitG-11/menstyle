"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [interestedIds, setInterestedIds] = useState<number[]>([]);
  const [interestedProducts, setInterestedProducts] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"add" | "remove">("add");
  const interestFormRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);


  const products = [
    {
      id: 1,
      name: "Light Blue Cotton Shirt",
      description: "Premium breathable cotton shirt for all-day comfort.",
      price: 1499,
      category: "Shirt",
      image: "/products/shirts/Light-Blue-Cotton-Shirt.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Classic White Cotton Shirt",
      description: "Clean white cotton shirt with a sharp tailored look.",
      price: 1299,
      category: "Shirt",
      image: "/products/shirts/Classic-White-Cotton-Shirt.jpg",
      isNew: false,
    },
    {
      id: 3,
      name: "Light Blue Slim Fit Shirt",
      description: "Slim fit light blue shirt made for everyday office comfort.",
      price: 1399,
      category: "Shirt",
      image: "/products/shirts/Light-Blue-Slim-Fit-Shirt.jpg",
      isNew: true,
    },
    {
      id: 4,
      name: "Checked Casual Shirt",
      description: "Casual checked shirt with a relaxed and stylish fit.",
      price: 1199,
      category: "Shirt",
      image: "/products/shirts/Checked-Casual-Shirt.jpg",
      isNew: false,
    },
    {
      id: 5,
      name: "Olive Green Solid Shirt",
      description: "Solid olive green shirt with a modern casual appeal.",
      price: 1349,
      category: "Shirt",
      image: "/products/shirts/Olive-Green-Solid-Shirt.jpg",
      isNew: true,
    },
    {
      id: 6,
      name: "Classic Black T-Shirt",
      description: "Soft everyday essential wear with modern fit.",
      price: 799,
      category: "T-Shirt",
      image: "/products/tshirts/Classic-Black-T-Shirt.jpg",
      isNew: false,
    },    
    {
      id: 7,
      name: "White Oversized T-Shirt",
      description: "Oversized white t-shirt with a trendy streetwear vibe.",
      price: 799,
      category: "T-Shirt",
      image: "/products/tshirts/White-Oversized-T-Shirt.jpg",
      isNew: true,
    },
    {
      id: 8,
      name: "Graphic Print T-Shirt",
      description: "Stylish graphic print t-shirt for a bold casual look.",
      price: 899,
      category: "T-Shirt",
      image: "/products/tshirts/Graphic-Print-T-Shirt.jpg",
      isNew: true,
    },
    {
      id: 9,
      name: "Navy Blue Polo T-Shirt",
      description: "Smart navy polo t-shirt with a clean collar finish.",
      price: 999,
      category: "T-Shirt",
      image: "/products/tshirts/Navy-Blue-Polo-T-Shirt.jpg",
      isNew: false,
    },
    {
      id: 10,
      name: "Heather Grey V-Neck T-Shirt",
      description: "Soft heather grey V-neck tee with a relaxed fit for everyday comfort.",
      price: 749,
      category: "T-Shirt",
      image: "/products/tshirts/Heather-Grey-V-Neck-T-Shirt.jpg",
      isNew: false,
    },
    {
      id: 11,
      name: "Slim Fit Jeans",
      description: "Deep indigo slim-fit denim designed for durability.",
      price: 1999,
      category: "Jeans",
      image: "/products/jeans/Slim-Fit-Jeans.jpg",
      isNew: true,
    },
    {
      id: 12,
      name: "Dark Blue Slim Fit Jeans",
      description: "Slim fit dark blue jeans with stretchable comfort.",
      price: 1799,
      category: "Jeans",
      image: "/products/jeans/Dark-Blue-Slim-Fit-Jeans.jpg",
      isNew: true,
    },
    {
      id: 13,
      name: "Light Blue Washed Jeans",
      description: "Light washed jeans with a modern everyday fit.",
      price: 1699,
      category: "Jeans",
      image: "/products/jeans/Light-Blue-Washed-Jeans.jpg",
      isNew: false,
    },
    { 
      id: 14,
      name: "Black Regular Fit Jeans",
      description: "Classic black jeans with a comfortable regular fit.",
      price: 1899,
      category: "Jeans",
      image: "/products/jeans/Black-Regular-Fit-Jeans.jpg",
      isNew: true,
    },
    {
      id: 15,
      name: "Grey Tapered Fit Jeans",
      description: "Tapered grey jeans with a sleek contemporary style.",
      price: 1849,
      category: "Jeans",
      image: "/products/jeans/Grey-Tapered-Fit-Jeans.jpg",
      isNew: false,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : selectedCategory === "New Arrival"
      ? products.filter((p) => p.isNew)
      : products.filter((p) => p.category === selectedCategory);

  const handleInterested = (id: number) => {
    setInterestedIds((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id) // remove
        : [...prev, id] // add
    );
  };

    
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#1A2433]">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 bg-[#F5F2EB] border-b border-[#e6e0d4] z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">

          <h1
            className="text-2xl tracking-wide"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            MENSTYLE
          </h1>

          <nav className="hidden md:flex space-x-6 text-sm">

  <a href="#home" className="hover:text-[#bfa77a] transition">
    Home
  </a>

  <button
    onClick={() => {
      setSelectedCategory("New Arrival");
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
    className="hover:text-[#bfa77a] transition"
  >
    New Arrival
  </button>

  <button
    onClick={() => {
      setSelectedCategory("All");
      productsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
    className="hover:text-[#bfa77a] transition"
  >
    Categories
  </button>

  <a href="#about" className="hover:text-[#bfa77a] transition">
    About Store
  </a>

  <a href="#contact" className="hover:text-[#bfa77a] transition">
    Contact Us
  </a>

</nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 items-center">

          {/* ===== LEFT SIDE ===== */}
          <div className="flex flex-col items-center justify-center text-center">

            {/* LOGO IMAGE CARD */}
            <Image
              src="/logo.png"
              alt="MENSTYLE Logo"
              width={340}
              height={340}
              className="object-contain"
              priority
            />

            {/* TAGLINE */}
            <p
              className="mt-16 text-xl tracking-[0.35em] text-[#3d4b5c]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Simple. Smart. Stylish.
            </p>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex justify-end">
            <Image
              src="/model.jpg"
              alt="Model"
              width={500}
              height={700}
              className="rounded-[22px] object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section
        id="products"
        ref={productsRef}
        className="max-w-7xl mx-auto px-8 py-20"
      >

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {["All", "New Arrival", "Shirt", "T-Shirt", "Jeans"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-sm border rounded-full transition-all
                ${
                  selectedCategory === cat
                    ? "bg-[#1A2433] text-white"
                    : "border-[#1A2433] hover:bg-[#1A2433] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F2] p-6 rounded-xl shadow-sm hover:shadow-md
              transition flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="w-full h-[400px] rounded-lg overflow-hidden bg-[#EDE6D8]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info (flex-grow keeps height equal) */}
              <div className="flex-grow">
                <h3 className="mt-5 text-lg font-semibold">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {product.description}
                </p>

                <p className="mt-3 font-medium">
                  ₹{product.price}
                </p>
              </div>

              {/* Interested Button (ALWAYS at bottom) */}
              <button
  onClick={() => {
    const isAlreadyInterested = interestedProducts.includes(product.name);

    setInterestedProducts((prev) =>
      isAlreadyInterested
        ? prev.filter((p) => p !== product.name)
        : [...prev, product.name]
    );

    setToastType(isAlreadyInterested ? "remove" : "add");
    setToastMessage(
      isAlreadyInterested
        ? "Interest removed successfully"
        : "Interest added successfully"
    );

    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  }}
  className={`mt-5 w-full py-2 rounded-md transition transform active:scale-95
    ${
      interestedProducts.includes(product.name)
        ? "bg-[#2f855a] text-white"
        : "bg-[#1A2433] text-white hover:bg-[#111827]"
    }`}
>
  {interestedProducts.includes(product.name)
    ? "Interested ✓"
    : "I'm Interested"}
</button>

            </div>
          ))}

        </div>

{/* Proceed Button */}
{interestedProducts.length > 0 && (
  <div className="flex justify-center mt-16">
    <button
      onClick={() =>
        interestFormRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className="px-8 py-3 bg-[#1A2433] text-white rounded-full
      hover:bg-[#111827] transition"
    >
      Proceed to Interest Form
    </button>
  </div>
)}

</section>


      {/* ================= ABOUT STORE SECTION ================= */}
      <section id="about" className="bg-[#FAF7F2] py-28">

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-4xl mx-auto text-center bg-[#F5F2EB] rounded-2xl px-10 py-16 shadow-sm">

      <h2
        className="text-4xl tracking-wide mb-6"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        About MENSTYLE
      </h2>

      <div className="w-16 h-[2px] bg-[#bfa77a] mx-auto mb-10"></div>

      <p className="text-[#3d4b5c] leading-relaxed text-lg">
        MENSTYLE is a modern men’s wear brand crafted for individuals
        who value simplicity, confidence, and refined style.
        Our collections focus on clean silhouettes, premium fabrics,
        and timeless design that never goes out of fashion.
      </p>

      <p className="mt-6 text-[#3d4b5c] leading-relaxed text-lg">
        From crisp shirts and versatile t-shirts to perfectly tailored
        jeans, every MENSTYLE product is designed to elevate your
        everyday wardrobe while keeping comfort at the core.
      </p>

      <p className="mt-6 text-[#3d4b5c] leading-relaxed text-lg">
        Based in Pune, MENSTYLE blends modern urban aesthetics with
        classic fashion principles to create clothing that feels
        effortless, confident, and authentic.
      </p>

    </div>

  </div>

</section>

{/* ================= INTEREST FORM SECTION ================= */}
<section
  id="interest"
  ref={interestFormRef}
  className="bg-[#FAF7F2] py-28"
>

  <div className="max-w-4xl mx-auto px-8">

    <h2
      className="text-4xl text-center mb-12"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      Show Your Interest
    </h2>

    {/* Selected Products */}
    <div className="mb-10">
      <h3 className="text-lg mb-3 font-medium">
        Selected Products
      </h3>

      {interestedProducts.length === 0 ? (
        <p className="text-sm text-gray-500">
          No products selected yet.
        </p>
      ) : (
        <ul className="list-disc pl-5 text-[#3d4b5c]">
          {interestedProducts.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>

    {/* Interest Form */}
    <form
  onSubmit={(e) => {
    e.preventDefault();

    // ❌ No product selected
    if (interestedProducts.length === 0) {
      setToastMessage("Please select at least one product before submitting.");
      setTimeout(() => setToastMessage(""), 3000);
      return;
    }

    // ✅ SUCCESS (Supabase later)
    setName("");
    setEmail("");
    setMobile("");
    setInterestedProducts([]);

    setToastMessage("Interest submitted successfully");

    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  }}
      className="bg-[#F5F2EB] max-w-xl mx-auto p-6 rounded-2xl shadow-sm space-y-5"
    >

      <div>
        <label className="block text-sm mb-2">Full Name</label>
        <input
  type="text"
  name="name"
  value={name}
  required
  className="w-full px-4 py-3 rounded-md border focus:outline-none"
  placeholder="Enter your name"
  onChange={(e) => {
    const value = e.target.value;
    setName(value);

    const words = value.trim().split(/\s+/);
    if (value && words.length < 2) {
      e.target.setCustomValidity("Please enter at least name and surname.");
    } else {
      e.target.setCustomValidity("");
    }
  }}
/>
      </div>

      <div>
        <label className="block text-sm mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-md border focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Mobile Number</label>
        <input
  type="tel"
  value={mobile}
  required
  pattern="\d{10}"
  onChange={(e) => setMobile(e.target.value)}
  onInvalid={(e) => {
    e.currentTarget.setCustomValidity(
      "Please enter a valid 10-digit mobile number."
    );
  }}
  onInput={(e) => e.currentTarget.setCustomValidity("")}
  className="w-full px-4 py-3 rounded-md border focus:outline-none"
  placeholder="Enter mobile number"
/>
      </div>

      <button
        type="submit"
        className="w-full bg-[#1A2433] text-white py-3 rounded-md
        hover:bg-[#111827] transition"
      >
        Submit Interest
      </button>

    </form>

  </div>

</section>
{toastMessage && (
  <div className="fixed top-6 right-6 z-50">
    <div
      className={`px-6 py-4 rounded-xl shadow-md flex items-center gap-3 animate-slide-in
      ${
        toastType === "add"
          ? "bg-[#E6F4EA] text-[#1A2433]"
          : "bg-[#FDE8E8] text-[#1A2433]"
      }`}
    >
      <span
        className={`text-lg ${
          toastType === "add" ? "text-green-600" : "text-red-600"
        }`}
      >
        {toastType === "add" ? "✔" : "✖"}
      </span>

      <span className="font-medium">{toastMessage}</span>
    </div>
  </div>
)}

{/* ================= CONTACT SECTION ================= */}
<section id="contact" className="max-w-7xl mx-auto px-8 py-24">

  <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-2xl shadow-sm p-10">

    {/* Heading */}
    <h2
      className="text-3xl text-center tracking-wide mb-10"
      style={{ fontFamily: "var(--font-playfair)" }}
    >
      Contact Store
    </h2>

    {/* Store Details */}
    <div className="space-y-8 text-[#1A2433]">

      {/* Store Name */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Store Name
        </p>
        <p className="mt-1 text-lg font-medium">
          MENSTYLE | MEN'S WEAR
        </p>
      </div>

      {/* Address */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Address
        </p>
        <p className="mt-1 leading-relaxed">
          Shop No. 3, Kakade Terrace, Ganpati Matha,  
          N.D.A Road, Warje Malwadi,  
          Pune – 411058
        </p>
      </div>

      {/* Email */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Email
        </p>
        <p className="mt-1">
          menstyle@gmail.com
        </p>
      </div>

      {/* Mobile Number */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Mobile Number
        </p>
        <p className="mt-1">
          +91 9527856412
        </p>
      </div>

      {/* Business Hours */}
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Business Hours
        </p>
        <p className="mt-1">
          Monday – Saturday : 9:30 AM – 9:30 PM  
          <br />
          Sunday : 10:00 AM – 9:00 PM
        </p>
      </div>

    </div>
  </div>

</section>
  <footer className="mt-24 border-t border-gray-200 bg-neutral-50">
  <div className="max-w-7xl mx-auto px-6 py-12 text-center space-y-4">

    {/* Store Name */}
    <h3 className="text-lg font-semibold tracking-wide text-gray-900">
      MENSTYLE <span className="text-gray-500">| MEN’S WEAR</span>
    </h3>

    {/* Address */}
    <p className="text-sm text-gray-600 leading-relaxed">
      Shop No. 3, Kakade Terrace, NDA Road, Warje Malwadi, Pune – 411058
    </p>

    {/* Phone */}
    <div className="flex justify-center items-center gap-2 text-sm font-medium">
      <span className="text-red-600">📞</span>
      <span className="text-gray-700">+91 9527856412</span>
    </div>

    {/* Copyright */}
    <p className="text-xs text-gray-400 pt-5">
      © 2026 MENSTYLE | MEN’S WEAR. All rights reserved.
    </p>

  </div>
</footer>

    </main>
  );
}


