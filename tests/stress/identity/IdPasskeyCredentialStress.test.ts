import { IdPasskeyCredentialWsHandler } from "../../../services/core-engine/src/identity/websockets/IdPasskeyCredentialWsHandler";
import { IdPasskeyCredentialSearchIndex } from "../../../services/core-engine/src/identity/search/IdPasskeyCredentialSearchIndex";

describe("IdPasskeyCredential Stress & Concurrency Load Test", () => {
  const search = new IdPasskeyCredentialSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IdPasskeyCredentialWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
