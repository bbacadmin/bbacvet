import React from "react";
import { Heart, Shield, Users, Star } from "lucide-react";
import logoImg from "../assets/logo.png";
import dogImg from "../assets/dog.jpg";

interface Feature {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const features: Feature[] = [
  {
    title: "Compassionate Care",
    icon: <Heart className="icon-lg" />,
    description:
      "We treat every pet as if they were our own, providing gentle, loving care that puts both pets and owners at ease.",
  },
  {
    title: "Expert Medicine",
    icon: <Shield className="icon-lg" />,
    description:
      "Our veterinary team stays current with the latest medical advances to provide the best possible care for your pet.",
  },
  {
    title: "Family-Focused",
    icon: <Users className="icon-lg" />,
    description:
      "We understand that pets are family members, and we're here to support you through every stage of their lives.",
  },
  {
    title: "Quality Service",
    icon: <Star className="icon-lg" />,
    description:
      "From our modern facility to our caring staff, every detail is designed to provide an exceptional experience.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-[70px]">
      <div className="content-wrapper">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center h-[70px] w-[70px] mb-[21px] mx-auto">
            <img
              src={logoImg}
              alt="Brighton Beach Animal Clinic Logo"
              className="h-full max-w-full object-contain w-full"
            />
          </div>
          <h2 className="text-text-primary text-2xl leading-8 mb-3.5 md:text-3xl md:leading-9">
            Your Neighborhood Partner in Pet Health
          </h2>
          <p className="text-text-secondary text-lg leading-6 max-w-2xl mx-auto">
            At Brighton Beach Animal Clinic, we're more than just a veterinary
            clinic — we're a caring, compassionate team dedicated to the
            lifelong well-being of your furry family members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] mb-[70px]">
          <div>
            <h3 className="text-text-primary text-xl leading-7 mb-5">
              Welcome to Our New Clinic
            </h3>
            <p className="text-text-secondary mb-5">
              Brighton Beach Animal Clinic opened its doors in 2025 with a
              mission to provide exceptional veterinary care to the pets and
              families of Brooklyn. Our state-of-the-art facility is equipped
              with modern medical equipment and designed with your pet's comfort
              in mind.
            </p>
            <p className="text-text-secondary mb-5">
              We believe that every pet deserves quality healthcare delivered
              with compassion and expertise. Our team is committed to building
              lasting relationships with both pets and their owners, providing
              personalized care that meets each pet's unique needs.
            </p>
            <p className="text-text-secondary">
              Whether you're visiting us for a routine wellness exam, urgent
              care, or specialized treatment, you can trust that your pet will
              receive the highest standard of veterinary medicine in a warm,
              welcoming environment.
            </p>
          </div>
          <div className="relative">
            <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] overflow-hidden rounded-[14px]">
              <img
                src={dogImg}
                alt="Modern veterinary clinic interior with examination table and medical equipment"
                className="h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-[70px]">
          {features.map((feature) => (
            <div key={feature.title} className="card card-padding text-center">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5 pt-5 pb-3.5 px-5">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-bg-tertiary">
                    <span className="text-text-accent">{feature.icon}</span>
                  </div>
                  <h4 className="text-text-primary text-base leading-6">
                    {feature.title}
                  </h4>
                </div>
                <div className="pb-5 px-5">
                  <p className="text-text-secondary text-sm leading-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-white bg-[linear-gradient(to_right,rgb(16,185,129)_0%,rgb(20,184,166)_100%)] p-10 rounded-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-medium leading-8 mb-3.5 md:text-3xl md:leading-9">
              Brighton Beach Animal Clinic by the Numbers
            </h3>
            <p className="text-bg-tertiary max-w-2xl mx-auto">
              Since opening our doors, we've been committed to providing
              exceptional care and building trust within our community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            <div className="text-center">
              <div className="text-2xl leading-8 mb-1 md:text-3xl md:leading-9">
                2025
              </div>
              <div className="text-bg-tertiary">Newly Opened</div>
            </div>
            <div className="text-center">
              <div className="text-2xl leading-8 mb-1 md:text-3xl md:leading-9">
                100%
              </div>
              <div className="text-bg-tertiary">Caring Staff</div>
            </div>
            <div className="text-center">
              <div className="text-2xl leading-8 mb-1 md:text-3xl md:leading-9">
                Same Day
              </div>
              <div className="text-bg-tertiary">Appointments Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl leading-8 mb-1 md:text-3xl md:leading-9">
                ∞
              </div>
              <div className="text-bg-tertiary">Love for Pets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
