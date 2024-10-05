/** @format */
"use client";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  const [optimsticBookings, optimsticDelete] = useOptimistic(
    bookings,
    (currentBooking, bookingId) => {
      return currentBooking.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimsticDelete(bookingId);
    await deleteReservation(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimsticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
