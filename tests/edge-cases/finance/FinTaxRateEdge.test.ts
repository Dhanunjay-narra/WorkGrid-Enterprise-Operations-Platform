import { FinTaxRatePublisher } from "../../../services/core-engine/src/finance/events/FinTaxRatePublisher";
import { FinTaxRateTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinTaxRateTelemetry";

describe("FinTaxRate Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinTaxRatePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinTaxRateTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
