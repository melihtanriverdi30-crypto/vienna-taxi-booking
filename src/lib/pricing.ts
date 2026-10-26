export const TARIFF = {
  baseFee: 4.5,
  perKm: 2.0,
  nightSurcharge: 0.2, // +20% between 22:00 and 06:00
  minimumFare: 12,
};

export function estimateFare(km: number, night = false): number {
  if (!Number.isFinite(km) || km <= 0) return 0;
  let fare = TARIFF.baseFee + km * TARIFF.perKm;
  if (night) fare *= 1 + TARIFF.nightSurcharge;
  fare = Math.max(fare, TARIFF.minimumFare);
  return Math.round(fare * 100) / 100;
}

export const AIRPORT_FLAT = 25; // Salzburg city centre ↔ Salzburg Airport (SZG)
