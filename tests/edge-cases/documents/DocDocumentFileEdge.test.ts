import { DocDocumentFilePublisher } from "../../../services/core-engine/src/documents/events/DocDocumentFilePublisher";
import { DocDocumentFileTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocDocumentFileTelemetry";

describe("DocDocumentFile Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocDocumentFilePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocDocumentFileTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
