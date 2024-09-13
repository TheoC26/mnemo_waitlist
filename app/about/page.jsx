"use client";
import FAQs from "@/components/FAQs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
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
        <h1 className="text-3xl font-bold mb-10">About us</h1>
        <p className="text-lg ">
          Mnemo was created to rekindle memories and reconnect hearts.
          Co-founded by Theodore Chan and Lucas Choe, Mnemo was inspired by
          their shared experiences with grandparents facing the effects of aging
          and memory loss. Designed with the prioritization of ease of use,
          Mnemo provides a unique and sentimental approach to memory care by
          focusing on emotional connectivity and reminiscence therapy, enabling
          seniors and individuals with dementia to stay connected with their
          past and loved ones. The app has two main sides: one for seniors or
          individuals with dementia, and another for loved ones - family,
          friends, or caregivers. Through features like memory sharing,
          personalized reminders, and personalized cognitive exercises, Mnemo
          empowers users to stay connected while improving mental well-being.
          Our mission is to ensure that every memory lasts, leaving a meaningful
          impact on the lives of seniors, individuals with memory loss, and
          their families and caregivers.
        </p>
        <h1 className="text-3xl font-bold mb-10">What is Mnemo?</h1>
        <p className="text-lg ">
          Mnemo is a mobile app designed to strengthen emotional connections for
          individuals with dementia and their loved ones through reminiscence
          therapy. By offering features such as memory sharing, personalized
          reminders, and personalized cognitive exercises, Mnemo helps seniors
          and those with memory loss stay connected to their past and the people
          who matter most. It also provides support for family members and
          caregivers, creating a meaningful experience for all involved.
        </p>
        <h1 className="text-3xl font-bold mb-10">How does Mnemo work?</h1>
        <p className="text-lg ">
          Mnemo works by facilitating virtual connections and short, meaningful
          interactions. Through features like memory sharing, users can quickly
          send and receive photos, videos, and voice notes, helping to
          strengthen emotional bonds. Mnemo’s core functions revolve around
          reminiscence therapy, a new method shown to improve cognitive ability
          and quality of life for seniors and those with dementia. According to
          established sources like the National Institutes of Health (NIH) and
          Elder Care Alliance, reminiscence therapy helps seniors and
          individuals with memory loss engage with past experiences, promoting
          better mental health and emotional well-being. By combining these two
          approaches, Mnemo enhances both emotional connectivity and cognitive
          support.
        </p>
        <h1 className="text-3xl font-bold mb-10">Behind Mnemo</h1>
        <p className="text-lg ">
          Mnemo was co-founded by high school entrepreneurs Theodore Chan
          (technical founder) and Lucas Choe (non-technical founder), who are
          both passionate about improving elderly and dementia care. They strive
          to enhance Mnemo through frequent updates based on stakeholder
          feedback and the latest research, ensuring the app remains both
          effective and innovative.
        </p>
        <FAQs faqs={faqs} />
      </section>
    </main>
  );
};

export default About;
