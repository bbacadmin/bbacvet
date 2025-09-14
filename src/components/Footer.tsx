import React from "react";
import { Instagram } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";

interface FooterProps {
  launchBooking: () => void;
}

const Footer = ({ launchBooking }: FooterProps) => {
  return (
    <footer className="text-white bg-[oklch(0.21_0.034_264.665)] py-14">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div>
            <ClinicInfo variant="footer" className="mb-[21px]" />
            <p className="text-[oklch(0.872_0.01_258.338)] mb-[21px]">
              {CLINIC_DATA.description}
            </p>
            <button
              onClick={() => launchBooking()}
              className="bg-[oklch(0.627_0.194_149.214)] px-[21px] py-[7px] rounded-[8.75px]"
            >
              Book Appointment
            </button>
          </div>
          <div>
            <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
              Contact Information
            </h4>
            <ContactCard
              variant="footer"
              showPhone
              showEmail
              showAddress
              showHours={false}
            />
          </div>
          <div>
            <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
              Our Services
            </h4>
            <ul className="text-[oklch(0.872_0.01_258.338)] list-none pl-0">
              <li className="mb-[10.5px]">Veterinary Care</li>
              <li className="mb-[10.5px]">Wellness Plans</li>
              <li className="mb-[10.5px]">Vaccines</li>
              <li className="mb-[10.5px]">Surgery</li>
              <li className="">Dentistry</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[15.75px] leading-[24.5px] mb-[21px]">
              Hours & Social
            </h4>
            <div className="mb-3.5">
              <div className="text-[oklch(0.872_0.01_258.338)] space-y-1">
                <p>Mon, Wed, Thu, Fri: {CLINIC_DATA.hours.detailed.monday}</p>
                <p>Sat: {CLINIC_DATA.hours.detailed.saturday}</p>
                <p>Tue, Sun: {CLINIC_DATA.hours.detailed.tuesday}</p>
              </div>
            </div>
            <div>
              <h5 className="mb-[10.5px]">Follow Us</h5>
              <div className="flex">
                <a
                  href={CLINIC_DATA.social.instagram.url}
                  className="flex items-center justify-center bg-[oklch(0.373_0.034_259.733)] h-[35px] w-[35px] rounded-[8.75px]"
                >
                  <Instagram className="h-[17.5px] w-[17.5px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[42px] pt-7 border-t border-solid border-[oklch(0.373_0.034_259.733)]">
        <div className="content-wrapper">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px] mb-3.5 md:mb-0">
              © 2025 bbacvet.com. All rights reserved.
            </p>
            <div className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px] flex">
              <button className="bg-transparent mr-[21px] p-0">
                Privacy Policy
              </button>
              <button className="bg-transparent mr-[21px] p-0">
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
};

export default Footer;
