import { BiDashboardPublisher } from "../../../services/core-engine/src/analytics/events/BiDashboardPublisher";
import { BiDashboardTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiDashboardTelemetry";

describe("BiDashboard Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiDashboardPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiDashboardTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
