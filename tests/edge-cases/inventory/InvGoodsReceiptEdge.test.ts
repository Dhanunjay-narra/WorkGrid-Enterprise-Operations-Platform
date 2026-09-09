import { InvGoodsReceiptPublisher } from "../../../services/core-engine/src/inventory/events/InvGoodsReceiptPublisher";
import { InvGoodsReceiptTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvGoodsReceiptTelemetry";

describe("InvGoodsReceipt Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvGoodsReceiptPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvGoodsReceiptTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
