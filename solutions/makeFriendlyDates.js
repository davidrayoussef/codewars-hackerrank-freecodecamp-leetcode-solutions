// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user:
// if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016)
// and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.

function makeFriendlyDates(arr) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const ordinalLookup = { "1": "st", "2": "nd", "3": "rd", "21": "st", "22": "nd", "23": "rd", "31": "st" };
  const formatDay = (d) => `${d.getDate()}${ordinalLookup[d.getDate()] || 'th'}`;
  const formatDateString = (d) => {
    d = d.split('-');
    return `${d[1]}-${d[2]}-${d[0]}`;
  };
  const checkYear = (d,i) => {
    const date1 = new Date(formatDateString(arr[0]));
    const date2 = new Date(formatDateString(arr[1]));
    const daysBetween = Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

    if (d.getFullYear() === 2016 && daysBetween < 365 && i === 0) {
      return '';
    }
    else if (daysBetween < 365 && i === 1) {
      return '';
    } else return `, ${d.getFullYear()}`;
  };
  const isSameMonth = arr[0].split('-')[0] === arr[1].split('-')[0] && arr[0].split('-')[1] === arr[1].split('-')[1];

  return arr
    .filter((v,i,a) => a.indexOf(v) === i)
    .map((v,i) => {
      let date = new Date(formatDateString(v));

      if (isSameMonth && i === 1) {
        return `${formatDay(date)}`;
      } else return `${months[date.getMonth()]} ${formatDay(date)}${checkYear(date, i)}`;
    });
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]); //=> ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]); //=> ["December 1st","February 3rd"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]); //=> ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]); //=> ["January 13th, 2018"].
