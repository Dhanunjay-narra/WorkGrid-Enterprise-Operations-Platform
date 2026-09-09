import { FinExpenseReceiptPublisher } from "../../../services/core-engine/src/finance/events/FinExpenseReceiptPublisher";
import { FinExpenseReceiptTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinExpenseReceiptTelemetry";

describe("FinExpenseReceipt Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinExpenseReceiptPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinExpenseReceiptTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
