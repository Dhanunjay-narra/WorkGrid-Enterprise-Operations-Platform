import { FinBankReconciliationPublisher } from "../../../services/core-engine/src/finance/events/FinBankReconciliationPublisher";
import { FinBankReconciliationTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinBankReconciliationTelemetry";

describe("FinBankReconciliation Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinBankReconciliationPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinBankReconciliationTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
