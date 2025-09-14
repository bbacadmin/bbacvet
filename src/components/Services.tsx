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
      className="bg-[linear-gradient(oklch(0.982_0.018_155.826)_0%,rgb(255,255,255)_100%)] py-[70px]"
    >
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <h2 className="text-[oklch(0.21_0.034_264.665)] text-[26.25px] leading-[31.5px] mb-3.5 md:text-[31.5px] md:leading-[35px]">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-[oklch(0.446_0.03_256.802)] text-[17.5px] leading-[24.5px] max-w-2xl mx-auto">
            From routine wellness exams to advanced surgical procedures, we
            provide complete veterinary care for your furry family members at
            every stage of their lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {services.map((service) => (
            <div key={service.title} className="card card-padding">
              <div className="flex flex-col gap-[21px]">
                <div className="flex items-center gap-[10.5px] pt-[21px] pb-3.5 px-[21px]">
                  <div className="flex items-center justify-center h-[42px] w-[42px] rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
                    <span className="text-[oklch(0.627_0.194_149.214)]">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="text-[oklch(0.21_0.034_264.665)] text-[17.5px] leading-[24.5px]">
                    {service.title}
                  </h4>
                </div>
                <div className="pb-[21px] px-[21px]">
                  <p className="text-[oklch(0.446_0.03_256.802)] mb-7">
                    {service.description}
                  </p>
                  <ul className="list-none pl-0">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-[oklch(0.446_0.03_256.802)] text-[12.25px] items-center flex leading-[17.5px] mb-[7px]"
                      >
                        <div className="bg-[oklch(0.627_0.194_149.214)] h-[5.25px] w-[5.25px] mr-[10.5px] rounded-[3.35544e+07px]"></div>
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
          <h3 className="text-[oklch(0.21_0.034_264.665)] text-[21px] leading-7 mb-3.5">
            Ready to Schedule Your Pet's Care?
          </h3>
          <p className="text-[oklch(0.446_0.03_256.802)] max-w-[588px] mb-7 mx-auto">
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
