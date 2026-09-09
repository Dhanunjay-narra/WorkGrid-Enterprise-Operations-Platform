import { InvItemCategoryWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvItemCategoryWsHandler";
import { InvItemCategorySearchIndex } from "../../../services/core-engine/src/inventory/search/InvItemCategorySearchIndex";

describe("InvItemCategory Stress & Concurrency Load Test", () => {
  const search = new InvItemCategorySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvItemCategoryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
