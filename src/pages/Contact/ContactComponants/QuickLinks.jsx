import React, { useState, useEffect } from "react";
import icon1 from "@/assets/images/icon1.webp";
import icon2 from "@/assets/images/icon2.webp";
import icon3 from "@/assets/images/icon3.webp";
import icon4 from "@/assets/images/icon4.webp";
import icon5 from "@/assets/images/icon5.webp";
import icon6 from "@/assets/images/icon6.webp";

const QuickLinks = () => {
  const links = [
    {
      title: "Report a Product Issue",
      icon: icon1,
      type: "Buyer",
      content:
        "Having trouble with your product? Please collect your order ID, photos/screenshots, and describe the issue clearly. Most product complaints are resolved within 48 hours.",
      help: "👉 Fill out the Product Issue Form or contact support@shophelp.com",
    },
    {
      title: "Payment & Refund Help",
      icon: icon2,
      type: "Buyer",
      content:
        "Refunds are usually processed within 5–7 working days. If a payment fails or refund is delayed, our finance team will assist you promptly.",
      help: "👉 Raise a ticket in your Orders Page or call +91-9876543210",
    },
    {
      title: "Become a Vendor",
      icon: icon3,
      type: "Vendor",
      content:
        "Start selling with us by completing the vendor onboarding form. Approval requires valid business documents and bank details.",
      help: "👉 Fill out the Vendor Onboarding Form",
    },
    {
      title: "Payout & Account Support",
      icon: icon4,
      type: "Vendor",
      content:
        "Vendor payouts are released weekly. Ensure your KYC and bank details are updated to avoid delays.",
      help: "👉 Contact vendor-support@shophelp.com for payout queries",
    },
    {
      title: "Shipping & Order Tracking",
      icon: icon5,
      type: "Buyer",
      content:
        "Track your orders using the Order ID on the tracking page. Delivery usually takes 5–7 days depending on location.",
      help: "👉 Visit your Orders page for live tracking",
    },
    {
      title: "General Help & FAQs",
      icon: icon6,
      type: "All",
      content:
        "Need help with something else? Visit our FAQ section or reach out to customer support for quick answers.",
      help: "👉 Visit the FAQ Page or email helpdesk@shophelp.com",
    },
  ];

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selected]);

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24 bg-[var(--section-bg-clr)]">
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-[var(--text-clr)] font-cormorant text-center md:text-left">
          Quick Help & Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => setSelected(link)}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img src={link.icon} alt={link.title} className="w-12 h-12" />
              </div>
              <h3 className="font-semibold text-lg text-[var(--text-clr)] text-center">
                {link.title}
              </h3>
              <p className="text-gray-500 mt-2 text-center">
                {link.type} Support
              </p>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-white/20">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative animate-fadeIn">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <img src={selected.icon} alt={selected.title} className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-[var(--text-clr)]">
                {selected.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {selected.content}
            </p>
            <p className="text-[var(--text-hover-clr)] font-medium">
              {selected.help}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickLinks;
