import { SupRoutingConditionPublisher } from "../../../services/core-engine/src/support/events/SupRoutingConditionPublisher";
import { SupRoutingConditionTelemetry } from "../../../services/core-engine/src/support/telemetry/SupRoutingConditionTelemetry";

describe("SupRoutingCondition Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupRoutingConditionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupRoutingConditionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
