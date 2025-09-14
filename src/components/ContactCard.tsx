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
        return "text-white h-6 w-6";
      case "footer":
        return "text-white h-4 w-4";
      default:
        return "text-white h-6 w-6";
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
        <div
          className={`flex ${
            variant === "hero" ? "items-center" : "items-start"
          } mb-6`}
        >
          <div
            className={`flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
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
                  ? "text-primary hover:text-primary-dark"
                  : "text-primary hover:text-primary-dark transition-colors"
              }`}
            >
              {CLINIC_DATA.contact.phone.number}
            </a>
          </div>
        </div>
      )}

      {showEmail && (
        <div
          className={`flex ${
            variant === "hero" ? "items-center" : "items-start"
          } mb-6`}
        >
          <div
            className={`flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
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
                  ? "text-primary hover:text-primary-dark"
                  : "text-primary hover:text-primary-dark transition-colors"
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
        <div
          className={`flex ${
            variant === "hero" ? "items-center" : "items-start"
          } mb-6`}
        >
          <div
            className={`flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
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
                  ? "text-primary hover:text-primary-dark"
                  : "text-primary hover:text-primary-dark transition-colors"
              }`}
            >
              <p
                className={
                  variant === "footer" ? "text-white/80" : "text-text-secondary"
                }
              >
                {CLINIC_DATA.contact.address.street}
              </p>
              {variant !== "hero" && (
                <p
                  className={
                    variant === "footer"
                      ? "text-white/60 text-sm leading-4"
                      : "text-text-muted text-sm leading-4"
                  }
                >
                  {CLINIC_DATA.contact.address.city}
                </p>
              )}
            </a>
          </div>
        </div>
      )}

      {showHours && (
        <div
          className={`flex ${
            variant === "hero" ? "items-center" : "items-start"
          }`}
        >
          <div
            className={`flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
            <Clock className={getIconClasses()} />
          </div>
          <div>
            {variant !== "hero" && <h4 className={textClasses.label}>Hours</h4>}
            <div className="text-text-secondary space-y-1">
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
