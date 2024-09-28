/** @format */

import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { ReservationProvider } from "./ResrvationContext";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <>
      <div className="mb-8 border border-primary-800">
        <DateSelector
          settings={settings}
          cabin={cabin}
          bookedDates={bookedDates}
        />
      </div>
      <div className="border border-primary-800  min-h-[400px]">
        <ReservationForm cabin={cabin} />
      </div>
    </>
  );
}

export default Reservation;
