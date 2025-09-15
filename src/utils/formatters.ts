// Helper functions for formatting clinic data
export const formatPhoneForDisplay = (phone: string) => phone;
export const formatPhoneForHref = (phone: string) =>
  `tel:${phone.replace(/\D/g, "")}`;
export const formatEmailForHref = (email: string) => `mailto:${email}`;
export const formatAddressForGoogleMaps = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
