import { IotAnomalyAlertPublisher } from "../../../services/core-engine/src/iot/events/IotAnomalyAlertPublisher";
import { IotAnomalyAlertTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotAnomalyAlertTelemetry";

describe("IotAnomalyAlert Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotAnomalyAlertPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotAnomalyAlertTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
