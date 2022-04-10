export function getUnite(unite, num) {
  if (unite === "metric") {
    return `${num}°C`;
  } else if (unite === "imperial") {
    return `${Math.floor(num * 1.8 + 32)}°F`;
  }
}
