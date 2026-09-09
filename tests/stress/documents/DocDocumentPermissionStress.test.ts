import { DocDocumentPermissionWsHandler } from "../../../services/core-engine/src/documents/websockets/DocDocumentPermissionWsHandler";
import { DocDocumentPermissionSearchIndex } from "../../../services/core-engine/src/documents/search/DocDocumentPermissionSearchIndex";

describe("DocDocumentPermission Stress & Concurrency Load Test", () => {
  const search = new DocDocumentPermissionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => DocDocumentPermissionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
