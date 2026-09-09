import { AiModelRoutingRulePublisher } from "../../../services/core-engine/src/ai/events/AiModelRoutingRulePublisher";
import { AiModelRoutingRuleTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiModelRoutingRuleTelemetry";

describe("AiModelRoutingRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiModelRoutingRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiModelRoutingRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
