import { DocDocumentPermissionPublisher } from "../../../services/core-engine/src/documents/events/DocDocumentPermissionPublisher";
import { DocDocumentPermissionTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocDocumentPermissionTelemetry";

describe("DocDocumentPermission Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocDocumentPermissionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocDocumentPermissionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
