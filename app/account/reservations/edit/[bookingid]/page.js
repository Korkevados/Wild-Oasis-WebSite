/** @format */

import { UpdateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import UpdateButton from "@/app/_components/UpdateButton";

export default async function Page({ params }) {
  const { bookingid } = params;
  // CHANGE
  const booking = await getBooking(bookingid);
  const { numGuests, observations, cabinId } = booking;
  const { max_capcity } = await getCabin(cabinId);
  const maxCapacity = max_capcity;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        עריכת מספר הזמנה {bookingid}
      </h2>

      <form
        action={UpdateBooking}
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <input type="hidden" value={bookingid} name="bookingid" />
        <div className="space-y-2">
          <label htmlFor="numGuests">כמה אורחים תהיו ?</label>
          <select
            defaultValue={numGuests}
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
          <label htmlFor="observations">משהו שנוסף שתרצה לספר לנו עליו ?</label>
          <textarea
            defaultValue={observations}
            name="observations"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <UpdateButton
            pendingText="מעדכן הזמנה..."
            notPendingText="עדכן הזמנה"
          />

          {/* <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            עדכן הזמנה
          </button> */}
        </div>
      </form>
    </div>
  );
}
