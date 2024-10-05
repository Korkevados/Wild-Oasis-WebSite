/** @format */
"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ResrvationContext";
import { CreateBooking } from "../_lib/actions";
import UpdateButton from "./UpdateButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  // CHANGE
  const maxCapacity = cabin.max_capcity;
  const cabinId = cabin.id;
  const regularPrice = cabin.regular_price;
  const startDate = range.from;
  const endDate = range.to;
  console.log(startDate, endDate);
  const numNights = differenceInDays(endDate, startDate);
  const cabinePrice = numNights * (regularPrice - cabin.discount);
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinePrice,
    cabinId,
  };

  const createBookingWithData = CreateBooking.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-16 py-2 flex  items-center">
        <p> מחובר כ</p>

        <div className="flex gap-4 items-center mr-4">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        // action={createBookingWithData}
        action={async (formData) => {
          createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col">
        <div className="space-y-2">
          <label htmlFor="numGuests">כמה אורחים ? </label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required>
            <option value="" key="">
              אנא בחר מספר אורחים
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "אורח" : "אורחים"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            פרטים נוספים שתרצה שנדע לקראת השהות שלך ?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="חיות מחמד ? ימי הולדת ? פינוקים ותוספות ?"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">אנא בחר ימים </p>
          ) : (
            <UpdateButton pendingText="משריין" notPendingText="הזמן בקתה" />
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
