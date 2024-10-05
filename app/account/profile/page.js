/** @format */

import SelectCountry from "@/app/_components/SelectCountry";
import UpdatrProfileForm from "@/app/_components/UpdatrProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session?.user?.email);
  const { fullName, email, nationality, nationalID, countryflag } = guest;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        אנא עדכן את הפרטים שלך
      </h2>
      <p className="text-lg mb-8 text-primary-200">
        אנא ספק את הפרטים הבאים כדי שנוכל לבצע עבורך הזמנות !
      </p>
      <UpdatrProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm "
          defaultCountry={nationality}
        />
      </UpdatrProfileForm>
    </div>
  );
}
