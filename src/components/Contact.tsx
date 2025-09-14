import React from "react";
import { Calendar } from "lucide-react";
import ContactCard from "./ContactCard";

interface ContactProps {
  launchBooking: () => void;
}

const Contact = ({ launchBooking }: ContactProps) => {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(rgb(255,255,255)_0%,theme(colors.brand.surface)_100%)] py-[70px]"
    >
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-brand-dark text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
            Schedule Your Pet&#39;s Appointment
          </h2>
          <p className="text-brand-muted text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
            Ready to give your pet the care they deserve? Contact us to schedule
            an appointment or reach out with any questions about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px]">
          <div>
            <h3 className="text-brand-dark text-lg leading-7 mb-[21px]">
              Get in Touch
            </h3>
            <div className="mb-7">
              <ContactCard variant="contact" />
            </div>
            <div className="bg-brand-surface gap-[21px] flex flex-col border p-[21px] rounded-[12.75px] border-solid border-brand-borderLight">
              <div className="flex items-center">
                <Calendar className="text-brand-icon h-[17.5px] w-[17.5px] mr-[7px]" />
                <h4 className="text-brand-icon">Visit Information</h4>
              </div>
              <p className="text-brand-textLight text-sm leading-[17.5px]">
                All visits are by appointment only. Call{" "}
                <a
                  href="tel:+19297381230"
                  className="text-brand-icon hover:text-brand-primary transition-colors underline"
                >
                  (929) 738-1230
                </a>{" "}
                to schedule. Please bring previous medical records and arrive 10
                minutes early for your appointment.
              </p>
            </div>
          </div>
          <div className="card card-padding">
            <div className="flex items-center mb-[21px]">
              <Calendar className="text-brand-primary h-[21px] w-[21px] mr-[10.5px]" />
              <h3 className="text-brand-dark text-lg leading-7">
                Book an Appointment
              </h3>
            </div>
            <div className="text-center mb-7">
              <h4 className="text-brand-dark text-base leading-[24.5px] mb-3.5">
                Easy Online Booking
              </h4>
              <p className="text-brand-muted mb-[21px]">
                Use our convenient online booking system to schedule your
                pet&#39;s appointment. Choose from available time slots and
                provide your pet&#39;s information all in one place.
              </p>
              <button
                onClick={() => launchBooking()}
                className="btn-primary mb-3.5"
              >
                Book Your Appointment
              </button>
            </div>
            <div className="bg-brand-surfaceLight p-[21px] rounded-[8.75px]">
              <h5 className="text-brand-dark mb-[10.5px]">What to Bring</h5>
              <ul className="text-brand-muted text-sm leading-[17.5px] list-none pl-0">
                <li className="flex items-center mb-[7px]">
                  <div className="bg-brand-primary h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]" />
                  Previous medical records
                </li>
                <li className="flex items-center mb-[7px]">
                  <div className="bg-brand-primary h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]" />
                  Current medications
                </li>
                <li className="flex items-center mb-[7px]">
                  <div className="bg-brand-primary h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]" />
                  Insurance information
                </li>
                <li className="flex items-center">
                  <div className="bg-brand-primary h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]" />
                  List of questions or concerns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
