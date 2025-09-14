import React from "react";
import { Calendar } from "lucide-react";
import ContactCard from "./ContactCard";

interface ContactProps {
  launchBooking: () => void;
}

export default function Contact({ launchBooking }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(rgb(255,255,255)_0%,oklch(0.982_0.018_155.826)_100%)] py-[70px]"
    >
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-[oklch(0.21_0.034_264.665)] text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
            Schedule Your Pet's Appointment
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
            Ready to give your pet the care they deserve? Contact us to schedule
            an appointment or reach out with any questions about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px]">
          <div>
            <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7 mb-[21px]">
              Get in Touch
            </h3>
            <div className="mb-7">
              <ContactCard variant="contact" />
            </div>
            <div className="bg-[oklch(0.982_0.018_155.826)] gap-[21px] flex flex-col border p-[21px] rounded-[12.75px] border-solid border-[oklch(0.925_0.084_155.995)]">
              <div className="flex items-center">
                <Calendar className="text-[oklch(0.448_0.119_151.328)] h-[17.5px] w-[17.5px] mr-[7px]" />
                <h4 className="text-[oklch(0.448_0.119_151.328)]">
                  Visit Information
                </h4>
              </div>
              <p className="text-[oklch(0.527_0.154_150.069)] text-[12.25px] leading-[17.5px]">
                All visits are by appointment only.{" "}
                <a
                  href="tel:+19297381230"
                  className="text-[oklch(0.448_0.119_151.328)] hover:text-[oklch(0.627_0.194_149.214)] transition-colors underline"
                >
                  Call (929) 738-1230 to schedule
                </a>
                . Please bring previous medical records and arrive 10 minutes
                early for your appointment.
              </p>
            </div>
          </div>
          <div className="card card-padding">
            <div className="flex items-center mb-[21px]">
              <Calendar className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px]" />
              <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7">
                Book an Appointment
              </h3>
            </div>
            <div className="text-center mb-7">
              <h4 className="text-[oklch(0.21_0.034_264.665)] text-[15.75px] leading-[24.5px] mb-3.5">
                Easy Online Booking
              </h4>
              <p className="text-[oklch(0.446_0.03_256.802)] mb-[21px]">
                Use our convenient online booking system to schedule your pet's
                appointment. Choose from available time slots and provide your
                pet's information all in one place.
              </p>
              <button
                onClick={() => launchBooking()}
                className="btn-primary w-full mb-3.5"
              >
                Book Your Appointment
              </button>
            </div>
            <div className="bg-[oklch(0.987_0.022_95.277)] p-[21px] rounded-[8.75px]">
              <h5 className="text-[oklch(0.21_0.034_264.665)] mb-[10.5px]">
                What to Bring
              </h5>
              <ul className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] leading-[17.5px] list-none pl-0">
                <li className="flex items-center mb-[7px]">
                  <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                  Previous medical records
                </li>
                <li className="flex items-center mb-[7px]">
                  <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                  Current medications
                </li>
                <li className="flex items-center mb-[7px]">
                  <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                  Insurance information
                </li>
                <li className="flex items-center">
                  <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
                  List of questions or concerns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
