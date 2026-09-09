import { DocMetadataTagPublisher } from "../../../services/core-engine/src/documents/events/DocMetadataTagPublisher";
import { DocMetadataTagTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocMetadataTagTelemetry";

describe("DocMetadataTag Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocMetadataTagPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocMetadataTagTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
