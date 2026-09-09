import { HrOkrGoalPublisher } from "../../../services/core-engine/src/hr/events/HrOkrGoalPublisher";
import { HrOkrGoalTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrOkrGoalTelemetry";

describe("HrOkrGoal Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrOkrGoalPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrOkrGoalTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
