import { Instagram } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";

interface FooterProps {
  launchBooking: () => void;
}

export default function Footer({ launchBooking }: FooterProps) {
  return (
    <footer className="text-white bg-gray-900 py-20">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
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
          <div>
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Contact Information
            </h4>
            <ContactCard
              variant="footer"
              showPhone={true}
              showEmail={true}
              showAddress={true}
              showHours={false}
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Our Services
            </h4>
            <ul className="text-white/80 space-y-4">
              <li className="hover:text-white transition-colors cursor-pointer">
                Veterinary Care
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Wellness Plans
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Vaccines
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Surgery
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Dentistry
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-8 leading-tight">
              Hours & Social
            </h4>
            <div className="mb-8">
              <div className="text-white/80 space-y-2">
                <p className="leading-relaxed">
                  Mon, Wed, Thu, Fri: {CLINIC_DATA.hours.detailed.monday}
                </p>
                <p className="leading-relaxed">
                  Sat: {CLINIC_DATA.hours.detailed.saturday}
                </p>
                <p className="leading-relaxed">
                  Tue, Sun: {CLINIC_DATA.hours.detailed.tuesday}
                </p>
              </div>
            </div>
            <div>
              <h5 className="mb-4 font-medium">Follow Us</h5>
              <div className="flex">
                <a
                  href={CLINIC_DATA.social.instagram.url}
                  className="flex items-center justify-center bg-white/10 hover:bg-primary h-12 w-12 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
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
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Service
              </button>
              <button
                onClick={() => launchBooking()}
                className="hover:text-white transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
