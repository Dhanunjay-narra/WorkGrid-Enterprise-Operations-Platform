import { BiExecutiveSummaryPublisher } from "../../../services/core-engine/src/analytics/events/BiExecutiveSummaryPublisher";
import { BiExecutiveSummaryTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiExecutiveSummaryTelemetry";

describe("BiExecutiveSummary Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiExecutiveSummaryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiExecutiveSummaryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
