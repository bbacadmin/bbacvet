import React from "react";
import { CLINIC_DATA } from "../constants/clinicData";
import logoImg from "../assets/logo.png";

interface ClinicInfoProps {
  variant?: "header" | "mobile" | "footer" | "hero";
  showLogo?: boolean;
  showName?: boolean;
  showTagline?: boolean;
  logoClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
  className?: string;
  onClick?: () => void;
}

const ClinicInfo = ({
  variant = "header",
  showLogo = true,
  showName = true,
  showTagline = true,
  logoClassName = "",
  nameClassName = "",
  taglineClassName = "",
  className = "",
  onClick,
}: ClinicInfoProps) => {
  const getClasses = () => {
    switch (variant) {
      case "header":
        return {
          container: "logo-link",
          logo: "logo-image",
          name: "logo-title",
          tagline: "logo-subtitle",
        };
      case "mobile":
        return {
          container: "logo-link",
          logo: "logo-image",
          name: "logo-title",
          tagline: "logo-subtitle",
        };
      case "footer":
        return {
          container: "flex items-center mb-[21px]",
          logo: "brightness-0 invert-[1] h-full max-w-full object-contain w-full",
          name: "text-[17.5px] leading-[24.5px]",
          tagline:
            "text-[oklch(0.872_0.01_258.338)] text-[12.25px] leading-[17.5px]",
        };
      case "hero":
        return {
          container: "flex items-center mb-[21px]",
          logo: "h-full max-w-full object-contain w-full",
          name: "",
          tagline: "",
        };
      default:
        return {
          container: "",
          logo: "",
          name: "",
          tagline: "",
        };
    }
  };

  const classes = getClasses();

  const containerProps = onClick
    ? {
        onClick,
        style: { cursor: "pointer" },
      }
    : {};

  return (
    <div className={`${classes.container} ${className}`} {...containerProps}>
      {showLogo && (
        <div className="flex items-center justify-center h-14 w-14 mr-3.5">
          <img
            src={logoImg}
            alt={`${CLINIC_DATA.name} Logo`}
            className={`${classes.logo} ${logoClassName}`}
          />
        </div>
      )}
      <div>
        {showName && (
          <div className={`${classes.name} ${nameClassName}`}>
            {variant === "mobile" ? CLINIC_DATA.shortName : CLINIC_DATA.name}
          </div>
        )}
        {showTagline && (
          <div className={`${classes.tagline} ${taglineClassName}`}>
            {CLINIC_DATA.tagline}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicInfo;
