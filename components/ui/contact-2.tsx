"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",

}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendMessage = () => {
    const { firstname, lastname, email: formEmail, subject, message } = formData;
    const whatsappNumber = "+916303543881";

    const formattedMessage = `*New Contact Request*%0A%0A` +
      `*Name:* ${firstname} ${lastname}%0A` +
      `*Email:* ${formEmail}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-32" id="contact">
      <div className="container px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-white">
                {title}
              </h1>
              <p className="text-gray-400">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-white">
                Contact Details
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="font-bold text-white">Phone: </span>
                  {phone}
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-white">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-purple-400 transition-colors">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grid w-full items-center gap-1.5 ">
                <Label htmlFor="firstname" className="text-gray-300">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-gray-300">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-gray-300">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-gray-300">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-xl min-h-[120px]"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <Button
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold py-6 rounded-xl shadow-lg border-none"
              onClick={handleSendMessage}
            >
              Send Message via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
