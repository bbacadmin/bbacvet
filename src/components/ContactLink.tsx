import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { CLINIC_DATA } from "../constants/clinicData";

interface ContactLinkProps {
  type: "phone" | "email" | "address";
  variant?: "header" | "mobile" | "cta";
  showIcon?: boolean;
  className?: string;
}

export default function ContactLink({
  type,
  variant = "header",
  showIcon = true,
  className = "",
}: ContactLinkProps) {
  const getIcon = () => {
    switch (type) {
      case "phone":
        return Phone;
      case "email":
        return Mail;
      case "address":
        return MapPin;
      default:
        return Phone;
    }
  };

  const getContent = () => {
    switch (type) {
      case "phone":
        return {
          href: CLINIC_DATA.contact.phone.href,
          text: CLINIC_DATA.contact.phone.number,
          icon: Phone,
        };
      case "email":
        return {
          href: CLINIC_DATA.contact.email.href,
          text: CLINIC_DATA.contact.email.address,
          icon: Mail,
        };
      case "address":
        return {
          href: CLINIC_DATA.contact.address.googleMapsUrl,
          text: CLINIC_DATA.contact.address.full,
          icon: MapPin,
        };
      default:
        return {
          href: "",
          text: "",
          icon: Phone,
        };
    }
  };

  const getClasses = () => {
    switch (variant) {
      case "header":
        return {
          link: "text-slate-800 items-center flex mr-3.5 hover:text-emerald-600 transition-colors",
          icon: "icon-md text-emerald-600 mr-1.5",
          text: "text-xs",
        };
      case "mobile":
        return {
          link: "mobile-contact-item",
          icon: "icon-md text-green-icon",
          text: "",
        };
      case "cta":
        return {
          link: "btn-pill border border-white",
          icon: "h-3.5 w-3.5 mr-[7px]",
          text: "",
        };
      default:
        return {
          link: "",
          icon: "",
          text: "",
        };
    }
  };

  const content = getContent();
  const classes = getClasses();
  const Icon = getIcon();

  const linkProps =
    type === "address" ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={content.href}
      className={`${classes.link} ${className}`}
      {...linkProps}
    >
      {showIcon && variant === "cta" && <Icon className={classes.icon} />}
      {showIcon && variant !== "cta" && <Icon className={classes.icon} />}
      <span className={classes.text}>{content.text}</span>
      {variant === "cta" && !showIcon && `Call ${content.text}`}
    </a>
  );
}
