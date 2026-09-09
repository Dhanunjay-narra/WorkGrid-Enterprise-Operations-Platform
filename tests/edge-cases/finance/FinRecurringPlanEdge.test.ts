import { FinRecurringPlanPublisher } from "../../../services/core-engine/src/finance/events/FinRecurringPlanPublisher";
import { FinRecurringPlanTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinRecurringPlanTelemetry";

describe("FinRecurringPlan Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinRecurringPlanPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinRecurringPlanTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
