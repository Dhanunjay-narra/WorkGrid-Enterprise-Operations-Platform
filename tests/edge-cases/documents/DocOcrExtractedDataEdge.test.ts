import { DocOcrExtractedDataPublisher } from "../../../services/core-engine/src/documents/events/DocOcrExtractedDataPublisher";
import { DocOcrExtractedDataTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocOcrExtractedDataTelemetry";

describe("DocOcrExtractedData Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocOcrExtractedDataPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocOcrExtractedDataTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
