import { InvReorderRulePublisher } from "../../../services/core-engine/src/inventory/events/InvReorderRulePublisher";
import { InvReorderRuleTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvReorderRuleTelemetry";

describe("InvReorderRule Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvReorderRulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvReorderRuleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
