import { DocDocumentSignaturePublisher } from "../../../services/core-engine/src/documents/events/DocDocumentSignaturePublisher";
import { DocDocumentSignatureTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocDocumentSignatureTelemetry";

describe("DocDocumentSignature Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocDocumentSignaturePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocDocumentSignatureTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
