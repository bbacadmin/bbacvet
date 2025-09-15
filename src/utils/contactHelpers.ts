import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC_DATA } from "../constants/data";
import { LucideIcon } from "lucide-react";

/**
 * Contact type definitions
 */
export type ContactType = "phone" | "email" | "address" | "hours";

/**
 * Variant definitions for contact components
 */
export type ContactVariant =
  | "header"
  | "mobile"
  | "cta"
  | "hero"
  | "contact"
  | "footer";

/**
 * Contact content interface
 */
export interface ContactContent {
  href: string;
  text: string;
  icon: LucideIcon;
}

/**
 * Contact classes interface
 */
export interface ContactClasses {
  link?: string;
  icon?: string;
  text?: string;
  label?: string;
  value?: string;
}

/**
 * Get the appropriate icon for a contact type
 */
export const getContactIcon = (type: ContactType): LucideIcon => {
  switch (type) {
    case "phone":
      return Phone;
    case "email":
      return Mail;
    case "address":
      return MapPin;
    case "hours":
      return Clock;
    default:
      return Phone;
  }
};

/**
 * Get the content (href, text, icon) for a contact type
 */
export const getContactContent = (type: ContactType): ContactContent => {
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
    case "hours":
      return {
        href: "",
        text: "", // Hours don't have a single href/text
        icon: Clock,
      };
    default:
      return {
        href: "",
        text: "",
        icon: Phone,
      };
  }
};

/**
 * Get CSS classes for ContactLink component variants
 */
export const getContactLinkClasses = (
  variant: ContactVariant
): ContactClasses => {
  switch (variant) {
    case "header":
      return {
        link: "text-primary items-center flex mr-3.5 hover:text-primary-dark transition-colors",
        icon: "icon-md text-primary mr-1.5",
        text: "text-xs",
      };
    case "mobile":
      return {
        link: "mobile-contact-item",
        icon: "icon-md text-primary",
        text: "",
      };
    case "cta":
      return {
        link: "btn-pill border border-white",
        icon: "h-3.5 w-3.5 mr-[7px] text-neutral-light",
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

/**
 * Get CSS classes for ContactCard component variants
 */
export const getContactCardClasses = (
  variant: ContactVariant
): ContactClasses => {
  switch (variant) {
    case "hero":
      return {
        link: "card-modern card-padding-sm py-4",
        label: "text-text-muted text-base leading-5",
        value: "text-text-secondary text-sm leading-4",
      };
    case "footer":
      return {
        link: "mb-3.5",
        label: "",
        value: "",
      };
    default:
      return {
        link: "",
        label: "text-text-primary mb-1",
        value: "text-text-secondary",
      };
  }
};

/**
 * Get icon classes for ContactCard component
 */
export const getContactCardIconClasses = (
  type: ContactType,
  variant: ContactVariant
): string => {
  const baseClasses = "text-white";

  if (variant === "footer") {
    return `${baseClasses} h-4 w-4 stroke-[2]`;
  }

  switch (variant) {
    case "hero":
      switch (type) {
        case "phone":
          return `${baseClasses} h-6 w-6`;
        case "email":
          return `${baseClasses} h-7 w-6`;
        case "address":
          return `${baseClasses} h-7 w-6`;
        case "hours":
          return `${baseClasses} h-6 w-6`;
        default:
          return `${baseClasses} h-6 w-6`;
      }
    default:
      switch (type) {
        case "phone":
          return `${baseClasses} h-6 w-6`;
        case "email":
          return `${baseClasses} h-7 w-6`;
        case "address":
          return `${baseClasses} h-7 w-6`;
        case "hours":
          return `${baseClasses} h-6 w-6`;
        default:
          return `${baseClasses} h-6 w-6`;
      }
  }
};

/**
 * Get link classes for contact links based on variant
 */
export const getContactLinkStyles = (variant: ContactVariant): string => {
  switch (variant) {
    case "footer":
      return "text-white hover:text-bg-tertiary transition-colors";
    case "hero":
      return "text-primary hover:text-primary-dark";
    default:
      return "text-primary hover:text-primary-dark transition-colors";
  }
};
