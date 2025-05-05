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

/**
 * Props:
 *  - workedDays: string[]  // dates in "yyyy-MM-dd"
 */
export default function CalendarComponent({ workedDays }) {
  // parse days into Date objects
  const workedDates = useMemo(
    () => workedDays.map((dateStr) => parseISO(dateStr)),
    [workedDays]
  );

  // determine range of dates
  const minDate = useMemo(
    () => workedDates.reduce((a, b) => (a < b ? a : b), new Date()),
    [workedDates]
  );
  const maxDate = useMemo(
    () => workedDates.reduce((a, b) => (a > b ? a : b), new Date(0)),
    [workedDates]
  );

  // if span > 1 year
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

  // compute display range
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

  // get months array
  const months = useMemo(() => {
    const m = [];
    let d = startOfMonth(displayStart);
    while (d <= displayEnd) {
      m.push(new Date(d));
      d = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    }
    return m;
  }, [displayStart, displayEnd]);

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
                {format(monthDate, "MMMM yyyy")}
              </h3>
              <div className="grid grid-cols-7 gap-1 text-center">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
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

/*

import React, { useState, useMemo } from 'react'; // React ve hookları
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isWithinInterval, subYears } from 'date-fns'; // date-fns fonksiyonları


 * Props:
 *  - workedDays: string[]  // "yyyy-MM-dd" formatında tarihler

export default function CalendarComponent({ workedDays }) { // Bileşen tanımı ve prop alımı
  // workedDays dizisindeki stringleri Date objesine çevir
  const workedDates = useMemo(
    () => workedDays.map(dateStr => parseISO(dateStr)), // her tarih string'ini parse eder
    [workedDays] // depended on workedDays değiştiğinde yeniden hesapla
  );

  // En küçük tarih (minDate) hesapla
  const minDate = useMemo(
    () => workedDates.reduce((a, b) => (a < b ? a : b), new Date()), // başlangıç olarak bugün kullanıp karşılaştır
    [workedDates]
  );
  // En büyük tarih (maxDate) hesapla
  const maxDate = useMemo(
    () => workedDates.reduce((a, b) => (a > b ? a : b), new Date(0)), // başlangıç olarak 1970 epoch
    [workedDates]
  );

  // Tarih aralığı 1 yıldan büyük mü?
  const moreThanYear = useMemo(
    () => maxDate - minDate > 1000 * 60 * 60 * 24 * 365, // ms cinsinden bir yıl
    [minDate, maxDate]
  );

  // Gösterim başlangıcı: 1 yıldan fazla ise maxDate'ten 1 yıl çıkar, değilse minDate
  const rangeStart = useMemo(() => (moreThanYear ? subYears(maxDate, 1) : minDate), [moreThanYear, minDate, maxDate]);
  // Gösterim bitişi her zaman maxDate
  const rangeEnd = maxDate;

  // Eğer 1 yıldan fazla veri varsa, dropdown için yılları oluştur
  const years = useMemo(() => {
    if (!moreThanYear) return []; // bir yıldan az ise boş liste
    const startYear = minDate.getFullYear(); // başlangıç yılı
    const endYear = maxDate.getFullYear(); // bitiş yılı
    const arr = [];
    for (let y = startYear; y <= endYear; y++) arr.push(y); // aradaki tüm yılları ekle
    return arr;
  }, [moreThanYear, minDate, maxDate]);

  // Seçili yılı state olarak tut (varsayılan maxDate yılı)
  const [selectedYear, setSelectedYear] = useState(rangeEnd.getFullYear());

  // Görüntüleme başlangıcı seçili yıla göre
  const displayStart = useMemo(() => {
    if (moreThanYear) {
      return new Date(selectedYear, 0, 1); // seçili yılın 1 Ocak
    }
    return rangeStart; // 1 yıldan az ise rangeStart
  }, [moreThanYear, selectedYear, rangeStart]);
  // Görüntüleme bitişi seçili yıla göre
  const displayEnd = useMemo(() => {
    if (moreThanYear) {
      return new Date(selectedYear, 11, 31); // seçili yılın 31 Aralık
    }
    return rangeEnd; // 1 yıldan az ise rangeEnd
  }, [moreThanYear, selectedYear, rangeEnd]);

  // Görüntülenecek ayların dizisi
  const months = useMemo(() => {
    const m = [];
    let d = startOfMonth(displayStart); // ilk ayın başı
    while (d <= displayEnd) {
      m.push(new Date(d)); // ayı ekle
      d = new Date(d.getFullYear(), d.getMonth() + 1, 1); // bir sonraki ayın başı
    }
    return m;
  }, [displayStart, displayEnd]);

  return (
    <div className="space-y-4"> {/* Ana container aralıklı alt elemanlar }
      {moreThanYear && ( // 1 yıldan fazla veri varsa yıl seçme dropdown'u göster
        <div className="flex items-center space-x-2">
          <label htmlFor="yearSelect" className="font-medium">Yıl:</label> {/* etiket }
          <select
            id="yearSelect"
            value={selectedYear} // seçili yılı ata
            onChange={(e) => setSelectedYear(Number(e.target.value))} // değiştirildiğinde güncelle
            className="border rounded p-1"
          >
            {years.map(y => (
              <option key={y} value={y}>{y}</option> // her yıl için option
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* responsive grid }
        {months.map(monthDate => { // her ay için
          const monthStart = startOfMonth(monthDate); // ay başı
          const monthEnd = endOfMonth(monthDate); // ay sonu
          const days = eachDayOfInterval({ start: monthStart, end: monthEnd }); // ayın tüm günleri
          return (
            <div key={monthDate.toISOString()} className="border rounded-lg p-4"> {/* ay kartı }
              <h3 className="text-center font-semibold mb-2">
                {format(monthDate, 'MMMM yyyy')} {/* Ay adı ve yıl }
              </h3>
              <div className="grid grid-cols-7 gap-1 text-center"> {/* haftalık başlıklar }
                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                  <div key={d} className="font-medium text-sm">{d}</div> // gün isimleri
                ))}
                {days.map(day => { // her gün için
                  const isWorked = workedDates.some(wd =>
                    wd.getFullYear() === day.getFullYear() && // yıl eşit mi?
                    wd.getMonth() === day.getMonth() && // ay eşit mi?
                    wd.getDate() === day.getDate() // gün eşit mi?
                  );
                  return (
                    <div
                      key={day.toISOString()}
                      className={`h-8 flex items-center justify-center text-sm rounded ${isWorked ? 'bg-green-500 text-white' : ''}`}
                    >
                      {format(day, 'd')} {/* gün numarası }
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

*/