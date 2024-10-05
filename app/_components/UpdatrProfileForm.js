/** @format */
"use client";
import { updateProfile } from "../_lib/actions";
import UpdateButton from "@/app/_components/UpdateButton";
function UpdatrProfileForm({ guest, children }) {
  // CHANGE
  const countryFlag = guest.countryFlag;

  return (
    <form
      action={updateProfile}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col e">
      <div className="space-y-2">
        <label>שם מלא</label>
        <input
          disabled
          name="fullName"
          defaultValue={guest.fullName}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>כתובת אימייל</label>
        <input
          disabled
          name="email"
          defaultValue={guest.email}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">מאיזה ארץ אתה ? </label>
          <img
            // width={20}
            // height={20}
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">תעודת זהות</label>
        <input
          name="nationalID"
          defaultValue={guest.nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
        <UpdateButton
          pendingText={"מעדכן פרטים..."}
          notPendingText={"עדכן פרטים"}
        />
      </div>
      <div className="flex justify-end items-center gap-6"></div>
    </form>
  );
}

export default UpdatrProfileForm;
