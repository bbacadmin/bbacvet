import ContactLink from "./ContactLink";
import ClinicInfo from "./ClinicInfo";
import dog2Img from "../assets/dog2.jpg";

interface CtaBannerProps {
  launchBooking: () => void;
}

export default function CtaBanner({ launchBooking }: CtaBannerProps) {
  return (
    <section className="relative bg-[linear-gradient(to_right,oklch(0.627_0.194_149.214)_0%,oklch(0.666_0.179_58.318)_100%)] overflow-hidden py-[70px]">
      <div className="absolute opacity-20 inset-0">
        <img
          src={dog2Img}
          alt="Happy golden retriever dog smiling at camera in a veterinary setting"
          className="h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="relative max-w-[1120px] text-center mx-auto px-3.5 md:px-7">
        <div className="max-w-[784px] mx-auto">
          <div className="flex items-center justify-center h-[70px] w-[70px] mb-[21px] mx-auto p-3.5 rounded-[3.35544e+07px] bg-white">
            <ClinicInfo
              variant="hero"
              showName={false}
              showTagline={false}
              logoClassName="h-full max-w-full object-contain w-full"
            />
          </div>
          <h2 className="text-white text-[26.25px] leading-[31.5px] mb-[21px] md:text-[31.5px] md:leading-[35px]">
            Your Pet's Health is Our Priority
          </h2>
          <p className="text-[oklch(0.962_0.044_156.743)] text-[17.5px] leading-[24.5px] max-w-2xl mb-7 mx-auto">
            Don't wait when it comes to your pet's health. Schedule an
            appointment today and experience the difference compassionate,
            professional veterinary care can make.
          </p>
          <div className="flex flex-col md:flex-row gap-3.5 mb-7 justify-center">
            <button onClick={() => launchBooking()} className="btn-pill">
              Book Appointment Now
            </button>
            <ContactLink
              type="phone"
              variant="cta"
              className="btn-pill border border-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div>
              <div className="text-[26.25px] leading-[31.5px] mb-[7px]">🏥</div>
              <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                Modern Facility
              </h4>
              <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                State-of-the-art equipment and comfortable environment
              </p>
            </div>
            <div>
              <div className="text-[26.25px] leading-[31.5px] mb-[7px]">👥</div>
              <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                Experienced Team
              </h4>
              <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                Compassionate professionals dedicated to pet health
              </p>
            </div>
            <div>
              <div className="text-[26.25px] leading-[31.5px] mb-[7px]">💙</div>
              <h4 className="text-[15.75px] leading-[24.5px] mb-[7px]">
                Caring Approach
              </h4>
              <p className="text-[oklch(0.962_0.044_156.743)] text-[12.25px] leading-[17.5px]">
                Treating every pet like family with personalized care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
