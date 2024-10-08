/** @format */

"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import { useReservation } from "./ResrvationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  // CHANGE
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { max_capcity, regular_price, discount } = cabin;
  const numNights = differenceInDays(displayRange);
  const cabinPrice = numNights * (regular_price - discount);
  // SETTINGS
  const { minimumBookingLength, maxBookingLength } = settings;
  return (
    <div className="flex flex-col justify-between mb-6">
      <DayPicker
        selected={displayRange}
        onSelect={(range) => setRange(range)}
        className="pt-12 place-self-center"
        mode="range"
        min={minimumBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(2025, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6 ">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regular_price - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regular_price}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regular_price}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}>
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
