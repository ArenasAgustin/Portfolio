export default function handler(_, res) {
  res.status(200).json({
    experience: ["sellers", "python2", "python1", "lastHorde", "praga", "muni"],
  });
}
