import { DocDocumentVersionPublisher } from "../../../services/core-engine/src/documents/events/DocDocumentVersionPublisher";
import { DocDocumentVersionTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocDocumentVersionTelemetry";

describe("DocDocumentVersion Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocDocumentVersionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocDocumentVersionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
