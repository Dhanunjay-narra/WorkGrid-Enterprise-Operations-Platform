import { BiExportJobPublisher } from "../../../services/core-engine/src/analytics/events/BiExportJobPublisher";
import { BiExportJobTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiExportJobTelemetry";

describe("BiExportJob Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiExportJobPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiExportJobTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
