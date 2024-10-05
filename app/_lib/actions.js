/** @format */

"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function CreateBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("אתה חייב להיות מחובר");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { data, error } = await supabase.from("bookings").insert([newBooking]);
  // So that the newly created object gets returned!

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/ThankYou");
}

export async function UpdateBooking(formData) {
  const bookingId = Number(formData.get("bookingid"));
  const session = await auth();
  if (!session) throw new Error("אתה חייב להיות מחובר");

  const guestbookings = await getBookings(session.user.guestId);
  const guestBookingsById = guestbookings.map((booking) => booking.id);

  if (!guestBookingsById.includes(bookingId)) {
    throw new Error("ניסית למחוק הזמנה שלא שלך !");
  }

  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const { data, error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("אתה חייב להיות מחובר");

  const guestbookings = await getBookings(session.user.guestId);
  const guestBookingsById = guestbookings.map((booking) => booking.id);

  if (!guestBookingsById.includes(bookingId)) {
    throw new Error("ניסית למחוק הזמנה שלא שלך !");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservation");
}

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("אתה חייב להיות מחובר");

  const nationalID = formData.get("nationalID");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("אנא ספק מפר תעודת זהות תקינה");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
