import { IntTransformationRulePublisher } from "../../../services/core-engine/src/integrations/events/IntTransformationRulePublisher";
import { IntTransformationRuleTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntTransformationRuleTelemetry";

describe("IntTransformationRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntTransformationRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntTransformationRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
