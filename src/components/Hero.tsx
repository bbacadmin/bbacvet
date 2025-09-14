import React from "react";
import { Star } from "lucide-react";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";
import catImg from "../assets/cat.jpg";

interface HeroProps {
  launchBooking: () => void;
  scrollTo: (id: string) => void;
}

const Hero = ({ launchBooking, scrollTo }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative bg-[linear-gradient(to_right_bottom,theme(colors.brand.surface)_0%,theme(colors.brand.surfaceLight)_100%)] py-[70px] md:py-28"
      aria-labelledby="hero-title"
    >
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] items-center">
          <div>
            <div className="flex items-center mb-[21px]">
              <ClinicInfo variant="hero" showName={false} showTagline={false} />
              <div className="flex items-center">
                <Star className="text-yellow-400 h-4 w-4" fill="currentColor" />
                <Star className="text-yellow-400 h-4 w-4" fill="currentColor" />
                <Star className="text-yellow-400 h-4 w-4" fill="currentColor" />
                <Star className="text-yellow-400 h-4 w-4" fill="currentColor" />
                <Star className="text-yellow-400 h-4 w-4" fill="currentColor" />
                <span className="text-slate-800 block ml-1.5">
                  New clinic, experienced care
                </span>
              </div>
            </div>
            <h1 className="text-slate-900 text-2xl leading-8 mb-5 md:text-5xl md:leading-12">
              Compassionate Care for Your Beloved Pets
            </h1>
            <p className="text-slate-800 text-base leading-6 max-w-md mb-7">
              <span className="flex items-center">
                Welcome to Our New Clinic
              </span>
              where your pet&#39;s health and happiness are our top priority.
              Our experienced veterinary team provides comprehensive care in a
              warm, welcoming environment.
            </p>
            <div className="flex flex-col md:flex-row gap-3.5 mb-7">
              <button onClick={() => launchBooking()} className="btn-primary">
                Book Appointment
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("about");
                }}
                className="btn-ghost"
              >
                Learn More
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ContactCard
                variant="hero"
                showPhone={false}
                showEmail={false}
                showAddress={false}
                showHours
              />
              <ContactCard
                variant="hero"
                showPhone
                showEmail={false}
                showAddress={false}
                showHours={false}
              />
              <ContactCard
                variant="hero"
                showPhone={false}
                showEmail={false}
                showAddress
                showHours={false}
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-[600px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] overflow-hidden rounded-[14px]">
              <img
                src={catImg}
                alt="Adorable cat with bright eyes in a veterinary clinic setting"
                className="h-full max-w-full object-cover w-full"
              />
            </div>
            <div className="absolute bg-white bottom-[-21px] left-[-21px] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] flex flex-col gap-[21px] border p-[21px] rounded-[12.75px] border-solid border-black/10">
              <div className="text-center">
                <p className="text-brand-primary text-[26.25px] leading-[31.5px] mb-[7px]">
                  2025
                </p>
                <p className="text-brand-muted">Newly Opened</p>
                <p className="text-brand-textMuted text-[12.25px] leading-[17.5px]">
                  Fresh Start, Experienced Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
