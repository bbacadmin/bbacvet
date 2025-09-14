import React from "react";
import { Stethoscope, Shield, Syringe, Users, Heart } from "lucide-react";

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

interface ServicesProps {
  launchBooking: () => void;
}

const services: Service[] = [
  {
    title: "Veterinary Care",
    icon: <Stethoscope className="icon-lg" />,
    description:
      "Comprehensive health examinations, diagnostic services, and treatment plans tailored to your pet's specific needs.",
    items: [
      "Complete physical exams",
      "Diagnostic testing",
      "Treatment planning",
      "Health monitoring",
    ],
  },
  {
    title: "Wellness Plans",
    icon: <Shield className="icon-lg" />,
    description:
      "Preventive care programs designed to keep your pet healthy throughout their life stages.",
    items: [
      "Annual wellness exams",
      "Health screenings",
      "Nutritional counseling",
      "Senior pet care",
    ],
  },
  {
    title: "Vaccines",
    icon: <Syringe className="icon-lg" />,
    description:
      "Essential vaccination protocols to protect your pet from preventable diseases and maintain optimal health.",
    items: [
      "Core vaccinations",
      "Lifestyle vaccines",
      "Titer testing",
      "Vaccination schedules",
    ],
  },
  {
    title: "Surgery",
    icon: <Users className="icon-lg" />,
    description:
      "Safe surgical procedures performed by experienced veterinarians in our modern, sterile facility.",
    items: [
      "Spay/neuter procedures",
      "Soft tissue surgery",
      "Pre-surgical screening",
      "Post-operative care",
    ],
  },
  {
    title: "Dentistry",
    icon: <Heart className="icon-lg" />,
    description:
      "Complete dental care services to maintain your pet's oral health and prevent dental disease.",
    items: [
      "Dental cleanings",
      "Dental X-rays",
      "Tooth extractions",
      "Oral health assessments",
    ],
  },
];

export default function Services({ launchBooking }: ServicesProps) {
  return (
    <section
      id="services"
      className="bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_100%)] py-7"
    >
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-text-primary text-2xl leading-8 mb-3.5 md:text-3xl md:leading-9">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-text-secondary text-lg leading-6 max-w-2xl mx-auto">
            From routine wellness exams to advanced surgical procedures, we
            provide complete veterinary care for your furry family members at
            every stage of their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {services.map((service) => (
            <div key={service.title} className="card card-padding">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5 pt-5 pb-3.5 px-5">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-bg-tertiary">
                    <span className="text-text-accent">{service.icon}</span>
                  </div>
                  <h4 className="text-text-primary text-lg leading-6">
                    {service.title}
                  </h4>
                </div>
                <div className="pb-5 px-5">
                  <p className="text-text-secondary mb-7">
                    {service.description}
                  </p>
                  <ul className="list-none pl-0">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-text-secondary text-sm items-center flex leading-4 mb-1"
                      >
                        <div className="bg-text-accent h-1 w-1 mr-2.5 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-text-primary text-xl leading-7 mb-3.5">
            Ready to Schedule Your Pet's Care?
          </h3>
          <p className="text-text-secondary max-w-2xl mb-7 mx-auto">
            Our experienced veterinary team is here to provide the highest
            quality care for your beloved pet. Book an appointment today and let
            us help keep your furry friend healthy and happy.
          </p>
          <button onClick={() => launchBooking()} className="btn-primary">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
