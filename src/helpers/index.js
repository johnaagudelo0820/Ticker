export const USA_LOCALE = "en-US";
export const MEXICAN_CURRENCY = "MXN";

export const PERCENTAGE_ELEMENT = "percentage";

export const formatNumber = (
  value,
  isInteger = false,
  numberOfDecimals = 2
) => {
  return isInteger
    ? value.toLocaleString(USA_LOCALE)
    : value.toLocaleString(USA_LOCALE, {
        minimumFractionDigits: numberOfDecimals || 2,
        maximumFractionDigits: numberOfDecimals || 2
      });
};
