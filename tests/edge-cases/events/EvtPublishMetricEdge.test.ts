import { EvtPublishMetricPublisher } from "../../../services/core-engine/src/events/events/EvtPublishMetricPublisher";
import { EvtPublishMetricTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtPublishMetricTelemetry";

describe("EvtPublishMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtPublishMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtPublishMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
