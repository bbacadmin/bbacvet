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
    <section
      id="about"
      className="py-24"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-green-50), transparent)",
      }}
    >
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center h-20 w-20 mb-8 mx-auto card-modern p-4">
            <img
              src={logoImg}
              alt="Brighton Beach Animal Clinic Logo"
              className="h-full max-w-full object-contain w-full"
            />
          </div>
          <h2 className="text-heading text-4xl md:text-5xl mb-6 leading-tight">
            Your Neighborhood Partner in Pet Health
          </h2>
          <p className="text-body text-xl max-w-3xl mx-auto leading-relaxed">
            At Brighton Beach Animal Clinic, we're more than just a veterinary
            clinic — we're a caring, compassionate team dedicated to the
            lifelong well-being of your furry family members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-heading text-3xl mb-6 leading-tight">
              Welcome to Our New Clinic
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Brighton Beach Animal Clinic opened its doors in 2025 with a
              mission to provide exceptional veterinary care to the pets and
              families of Brooklyn. Our state-of-the-art facility is equipped
              with modern medical equipment and designed with your pet's comfort
              in mind.
            </p>
            <p className="text-secondary mb-6 leading-relaxed">
              We believe that every pet deserves quality healthcare delivered
              with compassion and expertise. Our team is committed to building
              lasting relationships with both pets and their owners, providing
              personalized care that meets each pet's unique needs.
            </p>
            <p className="text-secondary leading-relaxed">
              Whether you're visiting us for a routine wellness exam, urgent
              care, or specialized treatment, you can trust that your pet will
              receive the highest standard of veterinary medicine in a warm,
              welcoming environment.
            </p>
          </div>
          <div className="relative">
            <div className="shadow-2xl overflow-hidden rounded-2xl card-elevated">
              <img
                src={dogImg}
                alt="Modern veterinary clinic interior with examination table and medical equipment"
                className="h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-modern card-padding text-center"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl gradient-primary text-white shadow-lg mx-auto">
                  {feature.icon}
                </div>
                <h4 className="text-heading text-lg leading-tight">
                  {feature.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="card-gradient p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Brighton Beach Animal Clinic by the Numbers
            </h3>
            <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
              Since opening our doors, we've been committed to providing
              exceptional care and building trust within our community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">2025</div>
              <div className="text-white/80 font-medium">Newly Opened</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">100%</div>
              <div className="text-white/80 font-medium">Caring Staff</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">
                Same Day
              </div>
              <div className="text-white/80 font-medium">
                Appointments Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-3">∞</div>
              <div className="text-white/80 font-medium">Love for Pets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
