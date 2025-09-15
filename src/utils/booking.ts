import { CLINIC_DATA } from "../constants/data";

/**
 * Launches the booking system using YourVetBook
 * This function is used across multiple components to initiate appointment booking
 */
export const launchBooking = () => {
  const fn = (
    window as { YourVetBook?: (clinicId: string, locationId: string) => void }
  ).YourVetBook;

  if (typeof fn === "function") {
    fn(CLINIC_DATA.booking.clinicId, CLINIC_DATA.booking.locationId);
  }
};
