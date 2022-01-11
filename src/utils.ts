export function replacer(key: any, value: any[]) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()),
    };
  } else {
    return value;
  }
}

export function reviver(
  key: any,
  value: {
    dataType: string;
    value: Iterable<readonly [unknown, unknown]>;
  } | null
) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}
