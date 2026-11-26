// One Star, Five Stars for the Food — entry v2 (Kirana, Hunter Office)
// Alien tourist one-star review of Earth: one sentence, max 200 chars.
// Grievance caused by Earth (forced to eat bare-handed, three days running)
// + burger praise from the second mouth, causally linked in one sentence.
// K1 explicit: "One star:" + "five stars for the food". K4: one complaint.
// K5: exactly one sentence, 152 chars, no trailing newline in entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: Earth made me eat with my bare hands like a savage for three days, but one burger was so good my second mouth stamped five stars for the food.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
