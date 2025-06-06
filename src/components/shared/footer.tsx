import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";

import { useState } from "react";
import { Send } from "lucide-react";


export default function Footer() {
  const [email, setEmail] = useState("");


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {

      setEmail("");

    }
  };

  return (
    <footer className="border-t border-blue-900/30 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-medium mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about#mission"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Company Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#our-journey"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Our Journey
                </Link>
              </li>
              <li>
                <Link
                  href="about#our-services"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Our Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#security-services"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Video Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/schedule"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Visit Scheduling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pricing-section"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Payment Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact#contactus"
                  className="text-gray-300 text-sm hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="flex relative">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1F2937] text-white px-3 py-2 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
              <Button type="submit" className="rounded-l-none">
                <Send className="h-4 w-4 text-[#091057]" />
              </Button>


            </form>
            <div className="flex gap-4 mt-4">
              <Link href="https://www.tiktok.com/@royalhousecheck?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-300 hover:text-primary">
                <FaTiktok className="h-5 w-5 text-[#F7E39F]" />
              </Link>
              <Link href="https://www.linkedin.com/in/royalhousecheck" target="_blank" className="text-gray-300 hover:text-primary">
                <FaLinkedin className="h-5 w-5 text-[#F7E39F]" />
              </Link>
              <Link href="https://www.instagram.com/royalhousecheck/" target="_blank" className="text-gray-300 hover:text-primary">
                <FaInstagram className="h-5 w-5 text-[#F7E39F]" />
              </Link>
              <Link href="https://x.com/royalhousecheck" target="_blank" className="text-gray-300 hover:text-primary">
                <FaTwitter className="h-5 w-5 text-[#F7E39F]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2023 - Royal House Check. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            24/7 Emergency Support • 336-995-3239
          </p>
        </div>
      </div>
    </footer>
  );
}