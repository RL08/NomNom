export const cn = (base, variant) =>
  variant
    ? `${base} ${variant
        .split(" ")
        .map((v) => `${base}-${v}`)
        .join(" ")}`
    : base;
