/** @format */

import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">תודה רבה על ההזמנה שבצעת !</h1>
      <Link
        href="/account/reservations"
        className="underline text-xl text-accent-500 inline-block">
        לכל ההזמנות שלך &rarr;
      </Link>
    </div>
  );
}
