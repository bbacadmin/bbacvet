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
export default function ContactCard({
  showPhone = true,
  showEmail = true,
  showAddress = true,
  showHours = true,
  variant = "contact",
  className = "",
}: ContactCardProps) {
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
        return "text-text-accent h-6 w-6";
      case "footer":
        return "text-text-accent h-4 w-4";
      default:
        return "text-text-accent h-4 w-4";
    }
  };

  const getTextClasses = () => {
    switch (variant) {
      case "hero":
        return {
          label: "text-text-muted text-base leading-5",
          value: "text-text-secondary text-sm leading-4",
        };
      case "footer":
        return {
          label: "",
          value: "",
        };
      default:
        return {
          label: "text-text-primary mb-1",
          value: "text-text-secondary",
        };
    }
  };

  const textClasses = getTextClasses();

  return (
    <div className={`${getCardClasses()} ${className}`}>
      {showPhone && (
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center h-[48px] w-[48px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <Phone className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Phone</h4>}
            <a
              href={CLINIC_DATA.contact.phone.href}
              className={`${
                variant === "footer"
                  ? "text-white hover:text-bg-tertiary transition-colors"
                  : variant === "hero"
                  ? ""
                  : "text-text-secondary hover:text-text-accent transition-colors"
              }`}
            >
              {CLINIC_DATA.contact.phone.number}
            </a>
          </div>
        </div>
      )}

      {showEmail && (
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center h-[48px] w-[48px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
            <Mail className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Email</h4>}
            <a
              href={`mailto:${CLINIC_DATA.contact.email.address}`}
              className={`${
                variant === "footer"
                  ? "text-white hover:text-bg-tertiary transition-colors"
                  : variant === "hero"
                  ? textClasses.value
                  : "text-text-secondary hover:text-text-accent transition-colors"
              }`}
            >
              {CLINIC_DATA.contact.email.address}
            </a>
            {variant === "contact" && (
              <p className="text-text-muted text-sm leading-4">
                We'll respond within one business day
              </p>
            )}
          </div>
        </div>
      )}

      {showAddress && (
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center h-[48px] w-[48px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)]">
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
                  ? "text-white hover:text-bg-tertiary transition-colors"
                  : variant === "hero"
                  ? textClasses.value
                  : "text-text-secondary hover:text-text-accent transition-colors"
              }`}
            >
              <p className={textClasses.value}>
                {CLINIC_DATA.contact.address.street}
              </p>
              {variant !== "hero" && (
                <p className="text-text-muted text-sm leading-4">
                  {CLINIC_DATA.contact.address.city}
                </p>
              )}
            </a>
          </div>
        </div>
      )}

      {showHours && (
        <div className="flex items-center">
          <div className="flex items-center justify-center h-[48px] w-[48px] mr-3.5 rounded-[8.75px] bg-[oklch(0.962_0.044_156.743)] p-2.5">
            <Clock className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Hours</h4>}
            <div className={`${textClasses.value} space-y-1`}>
              <p className="text-sm">
                Mon-Fri: {CLINIC_DATA.hours.detailed.monday}
              </p>
              <p className="text-sm">
                Sat: {CLINIC_DATA.hours.detailed.saturday}
              </p>
              <p className="text-sm">
                Sun-Tue: {CLINIC_DATA.hours.detailed.tuesday}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
