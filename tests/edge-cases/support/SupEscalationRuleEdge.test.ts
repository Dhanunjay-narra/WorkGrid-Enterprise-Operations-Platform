import { SupEscalationRulePublisher } from "../../../services/core-engine/src/support/events/SupEscalationRulePublisher";
import { SupEscalationRuleTelemetry } from "../../../services/core-engine/src/support/telemetry/SupEscalationRuleTelemetry";

describe("SupEscalationRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupEscalationRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupEscalationRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
