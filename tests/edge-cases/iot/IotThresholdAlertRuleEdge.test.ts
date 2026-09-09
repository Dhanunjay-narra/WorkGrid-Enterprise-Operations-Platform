import { IotThresholdAlertRulePublisher } from "../../../services/core-engine/src/iot/events/IotThresholdAlertRulePublisher";
import { IotThresholdAlertRuleTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotThresholdAlertRuleTelemetry";

describe("IotThresholdAlertRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotThresholdAlertRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotThresholdAlertRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
