"use client";
import FAQs from "@/components/FAQs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Support = () => {
  const faqs = [
    {
      question: "What is Mnemo?",
      answer:
        "Mnemo is an app that helps people with dementia remember their loved ones.",
    },
    {
      question: "How does Mnemo work?",
      answer:
        "Mnemo uses the power of the widespread access of smartphones to help people with dementia remember their loved ones.",
    },
    {
      question: "Who is behind Mnemo?",
      answer:
        "We are a team of highschool developers and creatives who are passionate about creating applications that help people with dementia.",
    },
  ];
  return (
    <main>
      <div className="mx-4 mt-4" href={"/"}>
        <Link href={"/"}>
          <Image
            src="/MnemoLogoNoText.png"
            alt="Mnemo Logo"
            width={1000} // Set width of the logo
            height={1000} // Set height of the logo
            className="w-16 h-16" // Optional Tailwind CSS classes for styling
          />
        </Link>
      </div>

      {/* about page */}
      <section className=" max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-5">Support</h1>
        <p className="text-lg mb-16">
          If you have any questions or need help, please contact us at
          mnemorememberapp@gmail.com
        </p>
      </section>
      <section className=" max-w-5xl mx-auto px-6 bg-gray-200 py-6 rounded-2xl">
        <h1 className="text-3xl font-bold mb-5">Digital Manual</h1>
        <Link
          className="text-lg mb-16 rounded-2xl"
          href={"/Mnemo Tutorial.pdf"}
        >Click here to view the digital manual. 🔗
        </Link>
      </section>
      <FAQs faqs={faqs} />
    </main>
  );
};

export default Support;
