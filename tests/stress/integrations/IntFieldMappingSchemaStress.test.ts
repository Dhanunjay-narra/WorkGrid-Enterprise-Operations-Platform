import { IntFieldMappingSchemaWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntFieldMappingSchemaWsHandler";
import { IntFieldMappingSchemaSearchIndex } from "../../../services/core-engine/src/integrations/search/IntFieldMappingSchemaSearchIndex";

describe("IntFieldMappingSchema Stress & Concurrency Load Test", () => {
  const search = new IntFieldMappingSchemaSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntFieldMappingSchemaWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
