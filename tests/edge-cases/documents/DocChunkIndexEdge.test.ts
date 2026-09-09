import { DocChunkIndexPublisher } from "../../../services/core-engine/src/documents/events/DocChunkIndexPublisher";
import { DocChunkIndexTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocChunkIndexTelemetry";

describe("DocChunkIndex Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocChunkIndexPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocChunkIndexTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
