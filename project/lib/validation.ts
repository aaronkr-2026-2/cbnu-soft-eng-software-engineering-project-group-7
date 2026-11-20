export function isValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const date = new Date(`${value}T00:00:00Z`);

  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function isValidTime(value: string): boolean {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) return false;
  return true;
}

export function isValidId(value: string): boolean {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0;
}

export function isValidText(value: string, min: number, max: number): boolean {
  return value.trim().length >= min && value.trim().length <= max;
}
