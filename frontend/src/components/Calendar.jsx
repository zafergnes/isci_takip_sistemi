import { format, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";

const Calendar = ({ workeddays }) => {
  const currentDate = new Date();
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // workeddays boş veya geçersizse varsayılan olarak boş bir dizi kullan
  const safeWorkedDays = Array.isArray(workeddays) ? workeddays : [];

  // Bu ay içinde çalışılan günleri kontrol et
  const workedThisMonth = daysInMonth.some((day) => {
    const dayStr = format(day, "yyyy-MM-dd");
    return safeWorkedDays.includes(dayStr);
  });

  if (!workedThisMonth) {
    return (
      <div className="p-4 text-center text-gray-600 font-bold">
        Bu ay çalışılmadı
      </div>
    );
  }

  return (
    <div className="flex gap-2 overflow-x-auto py-3 w-[900px]">
      {daysInMonth.map((day, i) => {
        const dayStr = format(day, "yyyy-MM-dd");
        const isWorked = safeWorkedDays.includes(dayStr);
        return (
          <div
            key={dayStr}
            className={`w-10 h-10 flex items-center p-1 justify-center rounded-xl border ${
              isWorked
                ? "bg-green-100 border-green-300"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <p>{i + 1}</p>
            {isWorked ? (
              <span className="text-green-600 font-bold">✓</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
