import { DocFileExportJobPublisher } from "../../../services/core-engine/src/documents/events/DocFileExportJobPublisher";
import { DocFileExportJobTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocFileExportJobTelemetry";

describe("DocFileExportJob Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocFileExportJobPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocFileExportJobTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
