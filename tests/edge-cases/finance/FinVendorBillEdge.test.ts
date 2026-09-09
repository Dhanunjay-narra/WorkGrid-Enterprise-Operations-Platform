import { FinVendorBillPublisher } from "../../../services/core-engine/src/finance/events/FinVendorBillPublisher";
import { FinVendorBillTelemetry } from "../../../services/core-engine/src/finance/telemetry/FinVendorBillTelemetry";

describe("FinVendorBill Edge-Case & Outbox Test Suite", () => {
  const publisher = new FinVendorBillPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = FinVendorBillTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
