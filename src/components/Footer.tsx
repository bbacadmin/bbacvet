import { Instagram } from "lucide-react";
import { CLINIC_DATA } from "../constants/data";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";

interface FooterProps {
  launchBooking: () => void;
}

export default function Footer({ launchBooking }: FooterProps) {
  return (
    <footer className="text-white bg-gray-900 py-20">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand/Description Column - spans 4 columns */}
          <div className="md:col-span-4">
            <ClinicInfo variant="footer" className="mb-6" />
            <p className="text-white/80 mb-8 leading-relaxed">
              {CLINIC_DATA.description}
            </p>
            <button
              onClick={() => launchBooking()}
              className="btn-primary-modern"
            >
              Book Appointment
            </button>
          </div>

          {/* Contact Information Column - spans 3 columns */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Contact Information
            </h4>
            <ContactCard
              variant="footer"
              showPhone={true}
              showEmail={true}
              showAddress={true}
              showHours={false}
              className="space-y-6"
            />
          </div>

          {/* Our Services Column - spans 2 columns (centered) */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Our Services
            </h4>
            <ul className="text-white/80 space-y-4">
              <li className="cursor-pointer">Veterinary Care</li>
              <li className="cursor-pointer">Wellness Plans</li>
              <li className="cursor-pointer">Vaccines</li>
              <li className="cursor-pointer">Surgery</li>
              <li className="cursor-pointer">Dentistry</li>
            </ul>
          </div>

          {/* Hours & Social Column - spans 3 columns */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Hours & Social
            </h4>
            <div className="mb-8">
              <div className="text-white/80 space-y-2">
                <p className="leading-relaxed">{CLINIC_DATA.hours.weekdays}</p>
                <p className="leading-relaxed">{CLINIC_DATA.hours.weekend}</p>
              </div>
            </div>
            <div>
              <h5 className="mb-4 font-medium">Follow Us</h5>
              <div className="flex">
                <a
                  href={CLINIC_DATA.social.instagram.url}
                  className="flex items-center justify-center h-10 w-10 rounded-xl gradient-primary text-white shadow-lg"
                >
                  <Instagram className="h-4 w-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-700">
        <div className="content-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-6 md:mb-0">
              © 2025 bbacvet.com. All rights reserved.
            </p>
            <div className="text-white/60 text-sm flex flex-wrap gap-6">
              <button>Privacy Policy</button>
              <button>Terms of Service</button>
              <button onClick={() => launchBooking()}>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
