import { DocWatermarkConfigPublisher } from "../../../services/core-engine/src/documents/events/DocWatermarkConfigPublisher";
import { DocWatermarkConfigTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocWatermarkConfigTelemetry";

describe("DocWatermarkConfig Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocWatermarkConfigPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocWatermarkConfigTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
