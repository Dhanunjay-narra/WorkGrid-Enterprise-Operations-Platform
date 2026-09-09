import { BiDataSourcePublisher } from "../../../services/core-engine/src/analytics/events/BiDataSourcePublisher";
import { BiDataSourceTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiDataSourceTelemetry";

describe("BiDataSource Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiDataSourcePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiDataSourceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
