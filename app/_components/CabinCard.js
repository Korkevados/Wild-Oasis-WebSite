/** @format */

import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, max_capcity, regular_price, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="flex-1 border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            בקתה מספר {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <p className="text-lg text-primary-200">
              מתאים ל <span className="font-bold">{max_capcity}</span> אורחים
            </p>
            <UsersIcon className="h-5 w-5 text-primary-600" />
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ₪{regular_price - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ₪{regular_price}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">₪{regular_price}</span>
            )}
            <span className="text-primary-200">/ לילה</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-left">
          <Link
            href={`/cabins/${id}`}
            className="border-r border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900">
            לפרטים והזמנה &larr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
