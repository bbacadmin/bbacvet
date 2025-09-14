import { Calendar } from "lucide-react";
import ContactCard from "./ContactCard";

interface ContactProps {
  launchBooking: () => void;
}

export default function Contact({ launchBooking }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(rgb(255,255,255)_0%,rgb(248,250,252)_100%)] py-7"
    >
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-text-primary text-2xl leading-8 mb-3.5 md:text-3xl md:leading-9">
            Schedule Your Pet's Appointment
          </h2>
          <p className="text-text-secondary text-lg leading-6 max-w-2xl mx-auto">
            Ready to give your pet the care they deserve? Contact us to schedule
            an appointment or reach out with any questions about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-text-primary text-xl leading-7 mb-5">
              Get in Touch
            </h3>
            <div className="mb-7">
              <ContactCard variant="contact" />
            </div>
            <div className="bg-bg-secondary gap-5 flex flex-col border p-5 rounded-xl border-solid border-gray-200">
              <div className="flex items-center">
                <Calendar className="text-text-secondary h-4 w-4 mr-1.5" />
                <h4 className="text-text-secondary">Visit Information</h4>
              </div>
              <p className="text-text-muted text-sm leading-4">
                All visits are by appointment only. Call{" "}
                <a
                  href="tel:+19297381230"
                  className="text-text-secondary hover:text-text-accent transition-colors underline"
                >
                  (929) 738-1230
                </a>{" "}
                to schedule. Please bring previous medical records and arrive 10
                minutes early for your appointment.
              </p>
            </div>
          </div>
          <div className="card card-padding">
            <div className="flex items-center mb-5">
              <Calendar className="text-text-accent h-5 w-5 mr-2.5" />
              <h3 className="text-text-primary text-xl leading-7">
                Book an Appointment
              </h3>
            </div>
            <div className="text-center mb-7">
              <h4 className="text-text-primary text-base leading-6 mb-3.5">
                Easy Online Booking
              </h4>
              <p className="text-text-secondary mb-5">
                Use our convenient online booking system to schedule your pet's
                appointment. Choose from available time slots and provide your
                pet's information all in one place.
              </p>
              <button
                onClick={() => launchBooking()}
                className="btn-primary mb-3.5"
              >
                Book Your Appointment
              </button>
            </div>
            <div className="bg-bg-tertiary p-5 rounded-lg">
              <h5 className="text-text-primary mb-2.5">What to Bring</h5>
              <ul className="text-text-secondary text-sm leading-4 list-none pl-0">
                <li className="flex items-center mb-1">
                  <div className="bg-text-accent h-1 w-1 mr-2.5 rounded-full"></div>
                  Previous medical records
                </li>
                <li className="flex items-center mb-1">
                  <div className="bg-text-accent h-1 w-1 mr-2.5 rounded-full"></div>
                  Current medications
                </li>
                <li className="flex items-center mb-1">
                  <div className="bg-text-accent h-1 w-1 mr-2.5 rounded-full"></div>
                  Insurance information
                </li>
                <li className="flex items-center">
                  <div className="bg-text-accent h-1 w-1 mr-2.5 rounded-full"></div>
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
