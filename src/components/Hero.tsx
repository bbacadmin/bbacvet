import React from "react";
import {
  Heart,
  Shield,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import logoImg from "../assets/logo.png";
import catImg from "../assets/cat.jpg";

interface HeroProps {
  launchBooking: () => void;
  scrollTo: (id: keyof typeof map) => void;
}

const map = {
  home: null,
  services: null,
  about: null,
  contact: null,
};

export default function Hero({ launchBooking, scrollTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-[linear-gradient(to_right_bottom,oklch(0.982_0.018_155.826)_0%,oklch(0.987_0.022_95.277)_100%)] py-[70px] md:py-28"
      aria-labelledby="hero-title"
    >
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[42px] items-center">
          <div>
            <div className="flex items-center mb-[21px]">
              <div className="flex items-center justify-center h-14 w-14 mr-3.5">
                <img
                  src={logoImg}
                  alt="Brighton Beach Animal Clinic Logo"
                  className="h-full max-w-full object-contain w-full"
                />
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 h-4 w-4" />
                <Star className="text-yellow-400 h-4 w-4" />
                <Star className="text-yellow-400 h-4 w-4" />
                <Star className="text-yellow-400 h-4 w-4" />
                <Star className="text-yellow-400 h-4 w-4" />
                <span className="text-slate-800 block ml-1.5">
                  New clinic, experienced care
                </span>
              </div>
            </div>
            <h1 className="text-slate-900 text-2xl leading-8 mb-5 md:text-5xl md:leading-12">
              Compassionate Care for Your Beloved Pets
            </h1>
            <p className="text-slate-800 text-base leading-6 max-w-md mb-7">
              Welcome to Brighton Beach Animal Clinic, where your pet's health
              and happiness are our top priority. Our experienced veterinary
              team provides comprehensive care in a warm, welcoming environment.
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
              <div className="card card-padding-sm">
                <div className="flex items-start">
                  <Clock className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                  <div>
                    <p className="text-[oklch(0.21_0.034_264.665)]">
                      <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                        Hours:
                      </span>
                      <br />
                      <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                        Mon-Fri: 9AM-6PM
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <a className="card card-padding-sm" href="tel:+19297381230">
                <div className="flex items-start">
                  <Phone className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                  <div>
                    <p className="text-[oklch(0.21_0.034_264.665)]">
                      <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                        Call Us:
                      </span>
                      <br />
                      <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                        (929) 738-1230
                      </span>
                    </p>
                  </div>
                </div>
              </a>
              <div className="card card-padding-sm">
                <div className="flex items-start">
                  <MapPin className="text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px] mr-[10.5px] mt-[2px]" />
                  <div>
                    <p className="text-[oklch(0.21_0.034_264.665)]">
                      <span className="text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]">
                        Location:
                      </span>
                      <br />
                      <span className="text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]">
                        Brighton Beach
                      </span>
                    </p>
                  </div>
                </div>
              </div>
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
                <p className="text-[oklch(0.627_0.194_149.214)] text-[26.25px] leading-[31.5px] mb-[7px]">
                  2025
                </p>
                <p className="text-[oklch(0.446_0.03_256.802)]">Newly Opened</p>
                <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                  Fresh Start, Experienced Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
