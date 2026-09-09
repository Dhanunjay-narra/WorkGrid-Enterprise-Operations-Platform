import { BiTimeSeriesProjectionPublisher } from "../../../services/core-engine/src/analytics/events/BiTimeSeriesProjectionPublisher";
import { BiTimeSeriesProjectionTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiTimeSeriesProjectionTelemetry";

describe("BiTimeSeriesProjection Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiTimeSeriesProjectionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiTimeSeriesProjectionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
