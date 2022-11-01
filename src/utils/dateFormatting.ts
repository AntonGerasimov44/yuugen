import monthsList from './months.json';

export function dateFormatting(date: string): string {
  const day = new Date(date).getDay();
  const monthNumber = new Date(date).getMonth();
  let monthString;
  monthsList.forEach((month) => {
    if (month.num === monthNumber) {
      monthString = month.month;
    }
  });
  const year = String(new Date(date).getUTCFullYear()).slice(2);
  return `${day} ${monthString} ${year}`;
}
