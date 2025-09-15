import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";
import { ContactVariant } from "../utils/contactHelpers";
import {
  getContactCardClasses,
  getContactCardIconClasses,
  getContactLinkStyles,
  getHoursData,
} from "../utils/contactHelpers";

interface ContactCardProps {
  showPhone?: boolean;
  showEmail?: boolean;
  showAddress?: boolean;
  showHours?: boolean;
  variant?: ContactVariant;
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
  const cardClasses = getContactCardClasses(variant);
  const hoursData = getHoursData();

  return (
    <div className={`${cardClasses.link} ${className}`}>
      {showPhone && (
        <div className="flex items-center mb-6">
          <div
            className={`flex-shrink-0 flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
            <Phone className={getContactCardIconClasses("phone", variant)} />
          </div>
          <div className="flex flex-col justify-center">
            {variant !== "hero" && <h4 className={cardClasses.label}>Phone</h4>}
            <a
              href={CLINIC_DATA.contact.phone.href}
              className={getContactLinkStyles(variant)}
            >
              {CLINIC_DATA.contact.phone.number}
            </a>
            {variant === "hero" && (
              <p className="text-text-muted text-sm leading-4 mt-1">
                Call us for appointments
              </p>
            )}
          </div>
        </div>
      )}

      {showEmail && (
        <div className="flex items-center mb-6">
          <div
            className={`flex-shrink-0 flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
            <Mail className={getContactCardIconClasses("email", variant)} />
          </div>
          <div className="flex flex-col justify-center">
            {variant !== "hero" && <h4 className={cardClasses.label}>Email</h4>}
            <a
              href={`mailto:${CLINIC_DATA.contact.email.address}`}
              className={getContactLinkStyles(variant)}
            >
              {CLINIC_DATA.contact.email.address}
            </a>
            {variant === "contact" && (
              <p className="text-text-muted text-sm leading-4 mt-1">
                We'll respond within one business day
              </p>
            )}
          </div>
        </div>
      )}

      {showAddress && (
        <div className="flex items-center mb-6">
          <div
            className={`flex-shrink-0 flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
            <MapPin className={getContactCardIconClasses("address", variant)} />
          </div>
          <div className="flex flex-col justify-center">
            {variant !== "hero" && (
              <h4 className={cardClasses.label}>Address</h4>
            )}
            <a
              href={CLINIC_DATA.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={getContactLinkStyles(variant)}
            >
              <p
                className={
                  variant === "footer" ? "text-white/80" : "text-text-secondary"
                }
              >
                {CLINIC_DATA.contact.address.street}
              </p>
              <p
                className={
                  variant === "footer"
                    ? "text-white/80 text-sm leading-4"
                    : "text-text-secondary text-sm leading-4"
                }
              >
                {CLINIC_DATA.contact.address.city}
              </p>
            </a>
          </div>
        </div>
      )}

      {showHours && (
        <div className="flex items-center">
          <div
            className={`flex-shrink-0 flex items-center justify-center ${
              variant === "footer" ? "h-10 w-10" : "h-14 w-14"
            } mr-3.5 rounded-xl gradient-primary text-white shadow-lg`}
          >
            <Clock className={getContactCardIconClasses("hours", variant)} />
          </div>
          <div className="flex flex-col justify-center">
            {variant !== "hero" && <h4 className={cardClasses.label}>Hours</h4>}
            <div className="text-text-secondary space-y-1">
              <p className="text-sm">Mon-Fri: {hoursData.monday}</p>
              <p className="text-sm">Sat: {hoursData.saturday}</p>
              <p className="text-sm">Sun-Tue: {hoursData.tuesday}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
