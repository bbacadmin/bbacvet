import { Star } from "lucide-react";
import ClinicInfo from "./ClinicInfo";
import ContactCard from "./ContactCard";
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
      className="relative bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_0%,rgb(248,250,252)_100%)] py-7 md:py-28"
      aria-labelledby="hero-title"
    >
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center mb-5">
              <ClinicInfo variant="hero" showName={false} showTagline={false} />
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
              <ContactCard
                variant="hero"
                showPhone={false}
                showEmail={false}
                showAddress={false}
                showHours={true}
              />
              <ContactCard
                variant="hero"
                showPhone={true}
                showEmail={false}
                showAddress={false}
                showHours={false}
              />
              <ContactCard
                variant="hero"
                showPhone={false}
                showEmail={false}
                showAddress={true}
                showHours={false}
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-auto shadow-xl overflow-hidden rounded-xl">
              <img
                src={catImg}
                alt="Adorable cat with bright eyes in a veterinary clinic setting"
                className="h-full max-w-full object-cover w-full"
              />
            </div>
            <div className="absolute bg-white bottom-[-1.3125rem] left-[-1.3125rem] shadow-lg flex flex-col gap-5 border p-5 rounded-xl border-solid border-gray-200">
              <div className="text-center">
                <p className="text-primary-600 text-2xl mb-1">2025</p>
                <p className="text-text-secondary">Newly Opened</p>
                <p className="text-text-muted text-sm">
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
