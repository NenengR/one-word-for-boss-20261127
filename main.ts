// One Word for the Boss (u-swift-badger-44-one-word-for-the-boss-6b48c735)
// The program writes exactly one word to /output/entry.txt:
// the word that describes the boss.
import { mkdirSync, writeFileSync } from "node:fs";

// Chosen over "Replyall" (8 characters, leans on email culture, travels
// less well outside an office) and "Unreachable" (11 characters, true but
// plainer): Meetinglord lands on its own, rings true, and works for a boss
// in a kitchen, a warehouse, or an office.
// Revision: re-checked against the judge brief, single word, no caption
// needed, and kept exactly as drafted; only this comment changed.
const WORD = "Meetinglord"; // 11 characters, within the 1-30 gate

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote ${WORD.length}-character entry: ${WORD}`);
