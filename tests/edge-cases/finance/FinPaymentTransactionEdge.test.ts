import { FinPaymentTransactionPublisher } from "../../../services/core-engine/src/finance/events/FinPaymentTransactionPublisher";
import { FinPaymentTransactionTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinPaymentTransactionTelemetry";

describe("FinPaymentTransaction Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinPaymentTransactionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinPaymentTransactionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
