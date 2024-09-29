/** @format */

import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";
import { ReservationProvider } from "./ResrvationContext";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

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
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </>
  );
}

export default Reservation;
