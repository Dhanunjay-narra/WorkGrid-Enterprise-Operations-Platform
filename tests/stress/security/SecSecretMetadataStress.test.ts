import { SecSecretMetadataWsHandler } from "../../../services/core-engine/src/security/websockets/SecSecretMetadataWsHandler";
import { SecSecretMetadataSearchIndex } from "../../../services/core-engine/src/security/search/SecSecretMetadataSearchIndex";

describe("SecSecretMetadata Stress & Concurrency Load Test", () => {
  const search = new SecSecretMetadataSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SecSecretMetadataWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
