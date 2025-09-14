import { Instagram } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";

interface FooterProps {
  launchBooking: () => void;
}

export default function Footer({ launchBooking }: FooterProps) {
  return (
    <footer className="text-white bg-text-primary py-14">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div>
            <ClinicInfo variant="footer" className="mb-5" />
            <p className="text-bg-tertiary mb-5">{CLINIC_DATA.description}</p>
            <button
              onClick={() => launchBooking()}
              className="bg-text-accent px-5 py-1.5 rounded-lg"
            >
              Book Appointment
            </button>
          </div>
          <div>
            <h4 className="text-base leading-6 mb-5">Contact Information</h4>
            <ContactCard
              variant="footer"
              showPhone={true}
              showEmail={true}
              showAddress={true}
              showHours={false}
            />
          </div>
          <div>
            <h4 className="text-base leading-6 mb-5">Our Services</h4>
            <ul className="text-bg-tertiary list-none pl-0">
              <li className="mb-2.5">Veterinary Care</li>
              <li className="mb-2.5">Wellness Plans</li>
              <li className="mb-2.5">Vaccines</li>
              <li className="mb-2.5">Surgery</li>
              <li className="">Dentistry</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base leading-6 mb-5">Hours & Social</h4>
            <div className="mb-3.5">
              <div className="text-bg-tertiary space-y-1">
                <p>Mon, Wed, Thu, Fri: {CLINIC_DATA.hours.detailed.monday}</p>
                <p>Sat: {CLINIC_DATA.hours.detailed.saturday}</p>
                <p>Tue, Sun: {CLINIC_DATA.hours.detailed.tuesday}</p>
              </div>
            </div>
            <div>
              <h5 className="mb-2.5">Follow Us</h5>
              <div className="flex">
                <a
                  href={CLINIC_DATA.social.instagram.url}
                  className="flex items-center justify-center bg-bg-tertiary h-8 w-8 rounded-lg"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-7 border-t border-solid border-bg-tertiary">
        <div className="content-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm leading-4 mb-3.5 md:mb-0">
              © 2025 bbacvet.com. All rights reserved.
            </p>
            <div className="text-text-muted text-sm leading-4 flex">
              <button className="bg-transparent mr-5 p-0">
                Privacy Policy
              </button>
              <button className="bg-transparent mr-5 p-0">
                Terms of Service
              </button>
              <button
                onClick={() => launchBooking()}
                className="bg-transparent p-0"
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
