import React, { useState, useMemo } from "react";
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWithinInterval,
  subYears,
} from "date-fns";
import { tr } from "date-fns/locale"; // <-- Türkçe locale eklendi

export default function CalendarComponent({ workedDays }) {
  if (!workedDays || workedDays.length === 0) {
    return (
      <div className=" font-bold text-red-500 ">Çalışan Henüz Çalışmadı.</div>
    );
  }
  const workedDates = useMemo(
    () => workedDays.map((dateStr) => parseISO(dateStr)),
    [workedDays]
  );

  const minDate = useMemo(
    () => workedDates.reduce((a, b) => (a < b ? a : b), new Date()),
    [workedDates]
  );
  const maxDate = useMemo(
    () => workedDates.reduce((a, b) => (a > b ? a : b), new Date(0)),
    [workedDates]
  );

  const moreThanYear = useMemo(
    () => maxDate - minDate > 1000 * 60 * 60 * 24 * 365,
    [minDate, maxDate]
  );

  const rangeStart = useMemo(
    () => (moreThanYear ? subYears(maxDate, 1) : minDate),
    [moreThanYear, minDate, maxDate]
  );
  const rangeEnd = maxDate;

  const years = useMemo(() => {
    if (!moreThanYear) return [];
    const startYear = minDate.getFullYear();
    const endYear = maxDate.getFullYear();
    const arr = [];
    for (let y = startYear; y <= endYear; y++) arr.push(y);
    return arr;
  }, [moreThanYear, minDate, maxDate]);

  const [selectedYear, setSelectedYear] = useState(rangeEnd.getFullYear());

  const displayStart = useMemo(() => {
    if (moreThanYear) {
      return new Date(selectedYear, 0, 1);
    }
    return rangeStart;
  }, [moreThanYear, selectedYear, rangeStart]);
  const displayEnd = useMemo(() => {
    if (moreThanYear) {
      return new Date(selectedYear, 11, 31);
    }
    return rangeEnd;
  }, [moreThanYear, selectedYear, rangeEnd]);

  const months = useMemo(() => {
    const m = [];
    let d = startOfMonth(displayStart);
    while (d <= displayEnd) {
      m.push(new Date(d));
      d = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    }
    return m;
  }, [displayStart, displayEnd]);

  // Türkçe gün isimleri
  const daysOfWeek = ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"];

  return (
    <div className="space-y-4 ">
      {moreThanYear && (
        <div className="flex items-center space-x-2">
          <label htmlFor="yearSelect" className="font-medium">
            Yıl:
          </label>
          <select
            id="yearSelect"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="border rounded p-1"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {months.map((monthDate) => {
          const monthStart = startOfMonth(monthDate);
          const monthEnd = endOfMonth(monthDate);
          const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
          return (
            <div
              key={monthDate.toISOString()}
              className="border rounded-lg p-4"
            >
              <h3 className="text-center font-semibold mb-2">
                {format(monthDate, "MMMM yyyy", { locale: tr })}{" "}
                {/* <-- Türkçe ay ismi */}
              </h3>
              <div className="grid grid-cols-7 gap-1 text-center">
                {daysOfWeek.map((d) => (
                  <div key={d} className="font-medium text-sm">
                    {d}
                  </div>
                ))}
                {days.map((day) => {
                  const isWorked = workedDates.some(
                    (wd) =>
                      wd.getFullYear() === day.getFullYear() &&
                      wd.getMonth() === day.getMonth() &&
                      wd.getDate() === day.getDate()
                  );
                  return (
                    <div
                      key={day.toISOString()}
                      className={`h-8 flex items-center justify-center text-sm rounded ${
                        isWorked ? "bg-green-500 text-white" : ""
                      }`}
                    >
                      {format(day, "d")}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
