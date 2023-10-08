import tecnologies from "./data/tecnologies.json";

export default function handler(_, res) {
  res.status(200).json({ tecnologies });
}
