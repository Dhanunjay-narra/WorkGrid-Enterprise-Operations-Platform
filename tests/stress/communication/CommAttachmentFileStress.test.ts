import { CommAttachmentFileWsHandler } from "../../../services/core-engine/src/communication/websockets/CommAttachmentFileWsHandler";
import { CommAttachmentFileSearchIndex } from "../../../services/core-engine/src/communication/search/CommAttachmentFileSearchIndex";

describe("CommAttachmentFile Stress & Concurrency Load Test", () => {
  const search = new CommAttachmentFileSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommAttachmentFileWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
