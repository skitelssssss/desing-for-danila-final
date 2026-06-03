export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")}\u00A0BYN`;
}
