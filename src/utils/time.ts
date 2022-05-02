import { DateTime } from 'luxon';

export const getDateTime = (dateString: string): string => {
  const dt = DateTime.fromFormat(dateString, 'dd/MM/yyyy');

  console.log(dt);
  if (dt.isValid) {
    return dt.toLocaleString(DateTime.DATETIME_MED);
  } else {
    return '-';
  }
};
