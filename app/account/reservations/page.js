/** @format */

import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();

  // CHANGE
  const bookings = await getBookings(session.user.guestId);
  console.log(bookings);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        ההזמנות שלך
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          אין לך הזמנות עדיין{" "}
          <Link className="underline text-accent-500" href="/cabins">
            לבקתות המיוחדות שלנו &larr;
          </Link>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
