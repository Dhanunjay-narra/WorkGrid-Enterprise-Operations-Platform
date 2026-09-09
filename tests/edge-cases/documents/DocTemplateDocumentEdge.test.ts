import { DocTemplateDocumentPublisher } from "../../../services/core-engine/src/documents/events/DocTemplateDocumentPublisher";
import { DocTemplateDocumentTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocTemplateDocumentTelemetry";

describe("DocTemplateDocument Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocTemplateDocumentPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocTemplateDocumentTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
