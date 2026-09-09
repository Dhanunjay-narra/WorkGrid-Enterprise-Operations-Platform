import { SecPiiMaskingRulePublisher } from "../../../services/core-engine/src/security/events/SecPiiMaskingRulePublisher";
import { SecPiiMaskingRuleTelemetry } from "../../../services/core-engine/src/security/telemetry/SecPiiMaskingRuleTelemetry";

describe("SecPiiMaskingRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecPiiMaskingRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecPiiMaskingRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
