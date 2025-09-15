import { MapPin, CalendarDays, Package } from "lucide-react";
import ContactCard from "./ContactCard";

interface ContactProps {
  launchBooking: () => void;
}

export default function Contact({ launchBooking }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-green-50), rgba(247, 249, 247, 0.3))",
      }}
    >
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <h2 className="text-heading text-4xl md:text-5xl mb-6 leading-tight">
            Schedule Your Pet's Appointment
          </h2>
          <p className="text-body text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to give your pet the care they deserve? Contact us to schedule
            an appointment or reach out with any questions about our services.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h3 className="text-heading text-3xl mb-8 leading-tight">
              Get in Touch
            </h3>
            <div className="mb-10">
              <ContactCard variant="contact" />
            </div>
            <div className="card-modern p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-14 w-14 mr-3 rounded-xl gradient-primary text-white shadow-lg">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <h4 className="text-heading text-xl">Visit Information</h4>
              </div>
              <p className="text-secondary leading-relaxed">
                All visits are by appointment only. Call{" "}
                <a
                  href="tel:+19297381230"
                  className="text-primary hover:text-primary-dark transition-colors font-medium underline"
                >
                  (929) 738-1230
                </a>{" "}
                to schedule. Please bring previous medical records and arrive 10
                minutes early for your appointment.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8 justify-end">
            <div className="card-modern p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-14 w-14 mr-3 rounded-xl gradient-primary text-white shadow-lg">
                  <CalendarDays className="text-white h-6 w-6" />
                </div>
                <h4 className="text-heading text-xl">Easy Online Booking</h4>
              </div>
              <p className="text-secondary mb-8 leading-relaxed">
                Use our convenient online booking system to schedule your pet's
                appointment. Choose from available time slots and provide your
                pet's information all in one place.
              </p>
              <button
                onClick={() => launchBooking()}
                className="btn-primary-modern"
              >
                Book Your Appointment
              </button>
            </div>

            <div className="card-modern p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-14 w-14 mr-3 rounded-xl gradient-primary text-white shadow-lg">
                  <Package className="text-white h-6 w-6" />
                </div>
                <h4 className="text-heading text-xl">What to Bring</h4>
              </div>
              <ul className="text-secondary text-sm leading-relaxed space-y-3 text-left ml-0 pl-0">
                <li className="flex items-center">
                  <div className="bg-primary h-2 w-2 mr-3 rounded-full flex-shrink-0"></div>
                  Previous medical records
                </li>
                <li className="flex items-center">
                  <div className="bg-primary h-2 w-2 mr-3 rounded-full flex-shrink-0"></div>
                  Current medications
                </li>
                <li className="flex items-center">
                  <div className="bg-primary h-2 w-2 mr-3 rounded-full flex-shrink-0"></div>
                  Insurance information
                </li>
                <li className="flex items-center">
                  <div className="bg-primary h-2 w-2 mr-3 rounded-full flex-shrink-0"></div>
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
