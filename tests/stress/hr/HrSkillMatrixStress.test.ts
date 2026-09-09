import { HrSkillMatrixWsHandler } from "../../../services/core-engine/src/hr/websockets/HrSkillMatrixWsHandler";
import { HrSkillMatrixSearchIndex } from "../../../services/core-engine/src/hr/search/HrSkillMatrixSearchIndex";

describe("HrSkillMatrix Stress & Concurrency Load Test", () => {
  const search = new HrSkillMatrixSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrSkillMatrixWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
