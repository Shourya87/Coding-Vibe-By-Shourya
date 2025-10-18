import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-10 px-6 md:px-20 border-t border-gray-200">
      {/* Top Section */}
      <div className="text-center mb-8">
        <p className="font-semibold text-lg">
          For better experience, <span className="text-gray-900 font-bold">download the Swiggy app now</span>
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-40 cursor-pointer"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="w-36 cursor-pointer"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-t ml-16 border-gray-200 pt-10">
        {/* Logo + Copyright */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="images/swiggy.png"
              alt="Swiggy"
              className="w-8"
            />
            <h2 className="text-3xl font-semibold text-orange-600">Swiggy</h2>
          </div>
          <p className="text-md text-gray-500">© 2025 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-md text-gray-600">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact us</h3>
          <ul className="space-y-2 text-md text-gray-600">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3 text-lg">Legal</h3>
          <ul className="space-y-2 text-md text-gray-600">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Available In */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Available in:</h3>
          <ul className="space-y-2 text-md text-gray-600">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select
            className="mt-3 border rounded-md px-2 py-1 text-md text-gray-600"
            defaultValue="679 cities"
          >
            <option>679 cities</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Life at Swiggy</h3>
          <ul className="space-y-2 text-md text-gray-600">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3 text-lg">Social Links</h3>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
