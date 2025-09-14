import ContactLink from "./ContactLink";
import ClinicInfo from "./ClinicInfo";
import dog2Img from "../assets/dog2.jpg";

interface CtaBannerProps {
  launchBooking: () => void;
}

export default function CtaBanner({ launchBooking }: CtaBannerProps) {
  return (
    <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-orange-400 overflow-hidden py-24">
      <div className="absolute opacity-10 inset-0">
        <img
          src={dog2Img}
          alt="Happy golden retriever dog smiling at camera in a veterinary setting"
          className="h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="relative content-wrapper text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-20 w-20 mb-8 mx-auto card-modern p-4">
            <ClinicInfo
              variant="hero"
              showName={false}
              showTagline={false}
              logoClassName="h-full max-w-full object-contain w-full"
            />
          </div>
          <h2 className="text-white text-4xl md:text-5xl mb-6 leading-tight font-bold">
            Your Pet's Health is Our Priority
          </h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-3xl mb-12 mx-auto">
            Don't wait when it comes to your pet's health. Schedule an
            appointment today and experience the difference compassionate,
            professional veterinary care can make.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center">
            <button
              onClick={() => launchBooking()}
              className="btn-secondary-modern bg-white text-primary border-white"
            >
              Book Appointment Now
            </button>
            <ContactLink
              type="phone"
              variant="cta"
              className="btn-ghost-modern border-white text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-white text-xl mb-3 font-semibold leading-tight">
                Modern Facility
              </h4>
              <p className="text-white/80 text-base leading-relaxed">
                State-of-the-art equipment and comfortable environment
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-white text-xl mb-3 font-semibold leading-tight">
                Experienced Team
              </h4>
              <p className="text-white/80 text-base leading-relaxed">
                Compassionate professionals dedicated to pet health
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💙</div>
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
