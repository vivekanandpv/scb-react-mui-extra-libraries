import { DateTime } from 'luxon';

export const getDateFromString = (s) => {
  const d = DateTime.fromISO(s);
  return d.isValid ? d : null;
};

export const isOnOrAfter = (d1, d2) => {
  if (!DateTime.isDateTime(d1)) d1 = DateTime.fromISO(d1);
  if (!DateTime.isDateTime(d2)) d2 = DateTime.fromISO(d2);

  return d1 >= d2;
};

export const isOnOrBefore = (d1, d2) => {
  if (!DateTime.isDateTime(d1)) d1 = DateTime.fromISO(d1);
  if (!DateTime.isDateTime(d2)) d2 = DateTime.fromISO(d2);

  return d1 <= d2;
};

export const isWithinRange = (d, lb, ub) => {
  if (!DateTime.isDateTime(d)) d = DateTime.fromISO(d);
  if (!DateTime.isDateTime(lb)) lb = DateTime.fromISO(lb);
  if (!DateTime.isDateTime(ub)) ub = DateTime.fromISO(ub);

  return d >= lb && d <= ub;
};
