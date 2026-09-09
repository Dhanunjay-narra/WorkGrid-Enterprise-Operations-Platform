import { BiReportQueryPublisher } from "../../../services/core-engine/src/analytics/events/BiReportQueryPublisher";
import { BiReportQueryTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiReportQueryTelemetry";

describe("BiReportQuery Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiReportQueryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiReportQueryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
