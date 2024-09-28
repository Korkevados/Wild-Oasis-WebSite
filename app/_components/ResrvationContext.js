/** @format */
"use client";

const { createContext, useState, useContext } = require("react");

const ReservationContext = createContext();

const intitialstate = {
  from: undefined,
  to: undefined,
};

function ReservationProvider({ children }) {
  const [range, setRange] = useState(intitialstate);
  const resetRange = () => setRange(intitialstate);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
