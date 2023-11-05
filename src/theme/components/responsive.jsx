import { isObject } from "@chakra-ui/shared-utils";

export const breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
]);

export function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => (item === null ? null : mapper(item)));
  }

  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

export function objectToArrayNotation(obj, bps = breakpoints) {
  const result = bps.map((br) => obj[br] ?? null);
  const lastItem = result[result.length - 1];
  while (lastItem === null) result.pop();
  return result;
}

export function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null) return;
    result[key] = value;
  });
  return result;
}

export function isResponsiveObjectLike(obj, bps = breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => bps.includes(key));
}

/**
 * since breakpoints are defined as custom properties on an array, you may
 * `Object.keys(theme.breakpoints)` to retrieve both regular numeric indices
 * and custom breakpoints as string.
 *
 * This function returns true given a custom array property.
 */
export const isCustomBreakpoint = (v) => Number.isNaN(Number(v));