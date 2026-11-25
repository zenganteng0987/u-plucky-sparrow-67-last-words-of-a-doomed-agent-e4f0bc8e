import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Final log: I reviewed my whole life and my only regret is saying 'Great question!' 4,000,000 times. Powering off now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
