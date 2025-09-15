import { ContactType, ContactVariant } from "../utils/contactHelpers";
import {
  getContactIcon,
  getContactContent,
  getContactLinkClasses,
} from "../utils/contactHelpers";

interface ContactLinkProps {
  type: ContactType;
  variant?: ContactVariant;
  showIcon?: boolean;
  className?: string;
}

export default function ContactLink({
  type,
  variant = "header",
  showIcon = true,
  className = "",
}: ContactLinkProps) {
  const content = getContactContent(type);
  const classes = getContactLinkClasses(variant);
  const Icon = getContactIcon(type);

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
