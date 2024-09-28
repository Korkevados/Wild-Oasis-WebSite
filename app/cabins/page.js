/** @format */

import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const metadata = {
  title: "Cabins",
};

// export const revalidate = 0;

export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        הבקתות היוקרתיות שלנו
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
        סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס
        איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
        וסטיבולום סוליסי טידום בעליק. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
        עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קוואזי
        במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף
        לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי,
        צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם
        למטכין נשואי מנורך. ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי
        מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.{" "}
      </p>
      <div className="flex justify-start mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
