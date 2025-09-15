import { Building2, Users, Heart } from "lucide-react";
import ContactLink from "./ContactLink";
import dog2Img from "../assets/dog2.jpg";

interface CtaBannerProps {
  launchBooking: () => void;
}

export default function CtaBanner({ launchBooking }: CtaBannerProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary-800 via-primary-600 to-primary-400 overflow-hidden py-24">
      <div className="absolute opacity-10 inset-0">
        <img
          src={dog2Img}
          alt="Happy golden retriever dog smiling at camera in a veterinary setting"
          className="h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="relative content-wrapper text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl mb-6 leading-tight font-bold">
            Your Pet's Health is Our Priority
          </h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-3xl mb-12 mx-auto">
            Don't wait when it comes to your pet's health. Schedule an
            appointment today and experience the difference compassionate,
            professional veterinary care can make.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center items-center">
            <button onClick={() => launchBooking()} className="btn-pill w-auto">
              Book Appointment
            </button>
            <ContactLink
              type="phone"
              variant="cta"
              className="btn-pill w-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white/10 text-white mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h4 className="text-white text-xl mb-3 font-semibold leading-tight">
                Modern Facility
              </h4>
              <p className="text-white/80 text-base leading-relaxed">
                State-of-the-art equipment and comfortable environment
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white/10 text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-white text-xl mb-3 font-semibold leading-tight">
                Experienced Team
              </h4>
              <p className="text-white/80 text-base leading-relaxed">
                Compassionate professionals dedicated to pet health
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white/10 text-white mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-white text-xl mb-3 font-semibold leading-tight">
                Caring Approach
              </h4>
              <p className="text-white/80 text-base leading-relaxed">
                Treating every pet like family with personalized care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
