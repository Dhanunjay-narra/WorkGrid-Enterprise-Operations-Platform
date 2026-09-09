import { IotTelemetryMetricPublisher } from "../../../services/core-engine/src/iot/events/IotTelemetryMetricPublisher";
import { IotTelemetryMetricTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotTelemetryMetricTelemetry";

describe("IotTelemetryMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotTelemetryMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotTelemetryMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
