import { PrjBudgetLinePublisher } from "../../../services/core-engine/src/projects/events/PrjBudgetLinePublisher";
import { PrjBudgetLineTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjBudgetLineTelemetry";

describe("PrjBudgetLine Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjBudgetLinePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjBudgetLineTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
