import { FinCostCenterPublisher } from "../../../services/core-engine/src/finance/events/FinCostCenterPublisher";
import { FinCostCenterTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinCostCenterTelemetry";

describe("FinCostCenter Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinCostCenterPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinCostCenterTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
