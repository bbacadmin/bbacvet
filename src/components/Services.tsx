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
      className="bg-gradient-to-b from-white to-slate-50 py-20"
    >
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <h2 className="text-heading text-4xl md:text-5xl mb-6 leading-tight">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-body text-xl max-w-3xl mx-auto leading-relaxed">
            From routine wellness exams to advanced surgical procedures, we
            provide complete veterinary care for your furry family members at
            every stage of their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.title} className="card-modern card-padding">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl gradient-primary text-white shadow-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-heading text-xl leading-tight">
                    {service.title}
                  </h4>
                </div>
                <div>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="list-none space-y-3">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-secondary text-sm flex items-center leading-relaxed"
                      >
                        <div className="bg-primary h-2 w-2 mr-3 rounded-full flex-shrink-0"></div>
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
          <h3 className="text-heading text-3xl mb-6 leading-tight">
            Ready to Schedule Your Pet's Care?
          </h3>
          <p className="text-body text-lg max-w-3xl mb-10 mx-auto leading-relaxed">
            Our experienced veterinary team is here to provide the highest
            quality care for your beloved pet. Book an appointment today and let
            us help keep your furry friend healthy and happy.
          </p>
          <button
            onClick={() => launchBooking()}
            className="btn-primary-modern"
          >
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
