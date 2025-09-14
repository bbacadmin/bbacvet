import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";

interface ContactCardProps {
  showPhone?: boolean;
  showEmail?: boolean;
  showAddress?: boolean;
  showHours?: boolean;
  variant?: "hero" | "contact" | "footer";
  className?: string;
}

const ContactCard = ({
  showPhone = true,
  showEmail = true,
  showAddress = true,
  showHours = true,
  variant = "contact",
  className = "",
}: ContactCardProps) => {
  const getCardClasses = () => {
    switch (variant) {
      case "hero":
        return "card card-padding-sm";
      case "footer":
        return "mb-3.5";
      default:
        return "";
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case "hero":
        return "text-[oklch(0.627_0.194_149.214)] h-[21px] w-[21px]";
      case "footer":
        return "text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]";
      default:
        return "text-[oklch(0.627_0.194_149.214)] h-[17.5px] w-[17.5px]";
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case "hero":
        return {
          label: "text-[oklch(0.551_0.027_264.364)] text-[14px] leading-[20px]",
          value: "text-[oklch(0.446_0.03_256.802)] text-[13px] leading-[18px]",
        };
      case "footer":
        return {
          label: "",
          value: "",
        };
      default:
        return {
          label: "text-[oklch(0.21_0.034_264.665)] mb-[3.5px]",
          value: "text-[oklch(0.446_0.03_256.802)]",
        };
    }
  };

  const textClasses = getTextClasses();

  return (
    <div className={`${getCardClasses()} ${className}`}>
      {showPhone && (
        <div className="flex items-start mb-6">
          <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <Phone className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Phone</h4>}
            <a
              href={CLINIC_DATA.contact.phone.href}
              className={`${
                variant === "footer"
                  ? "text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                  : variant === "hero"
                  ? ""
                  : "text-[oklch(0.446_0.03_256.802)] hover:text-[oklch(0.627_0.194_149.214)] transition-colors"
              }`}
            >
              {CLINIC_DATA.contact.phone.number}
            </a>
          </div>
        </div>
      )}

      {showEmail && (
        <div className="flex items-start mb-6">
          <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <Mail className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Email</h4>}
            <p className={textClasses.value}>
              {CLINIC_DATA.contact.email.address}
            </p>
            {variant === "contact" && (
              <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                We&#39;ll respond within one business day
              </p>
            )}
          </div>
        </div>
      )}

      {showAddress && (
        <div className="flex items-start mb-6">
          <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <MapPin className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && (
              <h4 className={textClasses.label}>Address</h4>
            )}
            <a
              href={CLINIC_DATA.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                variant === "footer"
                  ? "text-white hover:text-[oklch(0.962_0.044_156.743)] transition-colors"
                  : variant === "hero"
                  ? textClasses.value
                  : "text-[oklch(0.446_0.03_256.802)] hover:text-[oklch(0.627_0.194_149.214)] transition-colors"
              }`}
            >
              <p className={textClasses.value}>
                {CLINIC_DATA.contact.address.street}
              </p>
              {variant !== "hero" && (
                <p className="text-[oklch(0.551_0.027_264.364)] text-[12.25px] leading-[17.5px]">
                  {CLINIC_DATA.contact.address.city}
                </p>
              )}
            </a>
          </div>
        </div>
      )}

      {showHours && (
        <div className="flex items-start">
          <div className="flex items-center justify-center h-[42px] w-[42px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <Clock className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Hours</h4>}
            <div className={`${textClasses.value} space-y-1`}>
              <p>Mon, Wed, Thu, Fri: {CLINIC_DATA.hours.detailed.monday}</p>
              <p>Sat: {CLINIC_DATA.hours.detailed.saturday}</p>
              <p>Tue, Sun: {CLINIC_DATA.hours.detailed.tuesday}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
