/** @format */

import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/about-1.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          ברוכים הבאים
        </h1>

        <div className="space-y-8">
          <p>
            {cabins.length} בקתות היוקרה שלנו מספקות בסיס נעים, אבל את החופש
            והשלווה האמיתיים תמצאו בהרים שמסביב. לשוטט ביערות עבותים, לנשום את
            האוויר הצח ולראות את הכוכבים מנצנצים מלמעלה מהחום של מדורה או מהקוזי
            שלך.
          </p>
          <p>
            סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
            ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
            הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
            ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק,
            הדש שנרא התידם הכייר וק.
          </p>
          <p>
            קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף צש בליא, מנסוטו
            צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. קולורס מונפרד אדנדום
            סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס,
            אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט
            למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי
          </p>
        </div>
      </div>

      <div className=" col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
          quality={80}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">מאז 1962</h1>

        <div className="space-y-8">
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום
            דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה.
            דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
            אאוגו וסטיבולום סוליסי טידום בעליק. קולורס מונפרד אדנדום סילקוף,
            מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט
            מיחוצים. קלאצי קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת
            נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש
            בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.
          </p>
          <p>
            מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. ושבעגט
            ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו
            סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all">
              בוא לחקור איתנו
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
