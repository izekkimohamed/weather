const degrees = [
  {
    desc: "N",
    min: -11.25,
    max: 11.25,
  },
  {
    desc: "NNE",
    min: 11.25,
    max: 33.75,
  },
  {
    desc: "NE",
    min: 33.75,
    max: 56.25,
  },
  {
    desc: "ENE",
    min: 56.25,
    max: 78.75,
  },
  {
    desc: "E",
    min: 78.75,
    max: 101.25,
  },
  {
    desc: "ESE",
    min: 101.25,
    max: 123.75,
  },
  {
    desc: "SE",
    min: 123.75,
    max: 146.25,
  },
  {
    desc: "SSE",
    min: 146.25,
    max: 168.75,
  },
  {
    desc: "S",
    min: 168.75,
    max: 191.25,
  },
  {
    desc: "SSW",
    min: 191.25,
    max: 213.75,
  },
  {
    desc: "SW",
    min: 213.75,
    max: 236.25,
  },
  {
    desc: "WSW",
    min: 236.25,
    max: 258.75,
  },
  {
    desc: "W",
    min: 258.75,
    max: 281.25,
  },
  {
    desc: "WNW",
    min: 281.25,
    max: 303.75,
  },
  {
    desc: "NW",
    min: 303.75,
    max: 326.25,
  },
  {
    desc: "NNW",
    min: 326.25,
    max: 348.75,
  },
];
export function getDirection(windDirection) {
  let direction = "";
  degrees.map((degree) => {
    if (degree.min <= windDirection && windDirection <= degree.max) {
      direction = degree.desc;
    }
  });
  return direction;
}
