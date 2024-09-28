/** @format */

import SelectCountry from "@/app/_components/SelectCountry";
import UpdatrProfileForm from "@/app/_components/updatrProfileForm";

export default function Page() {
  const nationality = "portugal";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        אנא עדכן את הפרטים שלך
      </h2>
      <UpdatrProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        />
      </UpdatrProfileForm>
      <p className="text-lg mb-8 text-primary-200">
        אנא ספק את הפרטים הבאים כדי שנוכל לבצע עבורך הזמנות !
      </p>
    </div>
  );
}
