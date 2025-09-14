import { Star } from "lucide-react";
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
      className="relative py-12 md:py-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-green-200), var(--color-green-50))",
      }}
      aria-labelledby="hero-title"
    >
      <div className="content-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
              <div className="flex items-center">
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <Star className="text-yellow-400 h-5 w-5" fill="currentColor" />
                <span className="text-slate-800 block ml-3 font-medium">
                  New clinic, experienced care
                </span>
              </div>
            </div>
            <h1 className="text-display text-4xl md:text-6xl mb-8 leading-tight">
              Compassionate Care for Your Beloved Pets
            </h1>
            <p className="text-body text-lg max-w-lg mb-10 leading-relaxed">
              Welcome to Brighton Beach Animal Clinic, where your pet's health
              and happiness are our top priority. Our experienced veterinary
              team provides comprehensive care in a warm, welcoming environment.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <button
                onClick={() => launchBooking()}
                className="btn-primary-modern"
              >
                Book Appointment
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("about");
                }}
                className="btn-ghost-modern"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square md:aspect-auto shadow-2xl overflow-hidden rounded-2xl card-elevated">
              <img
                src={catImg}
                alt="Adorable cat with bright eyes in a veterinary clinic setting"
                className="h-full max-w-full object-cover w-full"
              />
              <div
                className="absolute bottom-4 left-4 shadow-xl flex flex-col gap-6 border p-6 md:p-8 md:pb-16 rounded-2xl border-solid border-gray-200 card-modern md:min-h-[200px]"
                style={{ background: "var(--color-neutral-light)" }}
              >
                <div className="text-center">
                  <p className="text-primary text-3xl font-bold mb-2">2025</p>
                  <p className="text-secondary font-medium">Newly Opened</p>
                  <p className="text-muted text-sm">
                    Fresh Start, Experienced Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full width contact cards */}
      <div className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
      </div>
    </section>
  );
}
