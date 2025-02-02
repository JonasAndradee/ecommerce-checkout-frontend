const formatCurrency = (
  value: number,
  options: Intl.NumberFormatOptions = {},
  locale: string = "pt-BR"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "BRL",
    ...options,
  }).format(value);
};

export default formatCurrency;
