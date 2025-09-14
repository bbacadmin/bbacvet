import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logoImg from "../assets/logo.png";

interface FooterProps {
  launchBooking: () => void;
}

export default function Footer({ launchBooking }: FooterProps) {
  return (
    <footer className="text-white bg-[oklch(0.21_0.034_264.665)] py-14">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div>
            <div className="flex items-center mb-[21px]">
              <div className="flex items-center justify-center h-[42px] w-[42px] mr-[10.5px]">
                <img
                  src={logoImg}
                  alt="Brighton Beach Animal Clinic Logo"
                  className="brightness-0 invert-[1] h-full max-w-full object-contain w-full"
                />
              </div>
              <div>
                <h3 className="text-[17.5px] leading-[24.5px]">
                  Brighton Beach Animal Clinic
                </h3>
                <p className="text-[oklch(0.872_0.01_258.338)] text-[12.25px] leading-[17.5px]">
                  Veterinary Care
                </p>
              </div>
            </div>
            <p className="text-[oklch(0.872_0.01_258.338)] mb-[21px]">
              Compassionate veterinary care for your beloved pets. We're
              committed to providing exceptional healthcare in a warm, welcoming
              environment.
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
            <div className="mb-3.5">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                  <Phone className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                </div>
                <div>
                  <a
                    href="tel:+19297381230"
                    className="text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                  >
                    (929) 738-1230
                  </a>
                  <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                    <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                      Hours:
                    </span>{" "}
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3.5">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                  <Mail className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                </div>
                <div>
                  <a
                    href="mailto:bbacvet@gmail.com"
                    className="text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                  >
                    bbacvet@gmail.com
                  </a>
                  <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                    <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                      Hours:
                    </span>{" "}
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-3.5">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                  <MapPin className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                </div>
                <div>
                  <p className="">122 Brighton 11th Street</p>
                  <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                    <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                      Hours:
                    </span>{" "}
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
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
              <div className="flex items-center">
                <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                  <Clock className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                </div>
                <div>
                  <p className="">Monday - Friday</p>
                  <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                    <span className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                      Hours:
                    </span>{" "}
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[21px]">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                  <Clock className="text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]" />
                </div>
                <div>
                  <p className="">Weekends</p>
                  <p className="text-[oklch(0.707_0.022_261.325)] text-[12.25px] leading-[17.5px]">
                    Closed
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="">Follow Us</h5>
              <div className="flex mt-[10.5px]">
                <a
                  href="https://www.instagram.com/bbac.vet/?igsh=ZzcxYnYweWNxazJm"
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
}
