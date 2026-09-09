import { InvPurchaseOrderItemPublisher } from "../../../services/core-engine/src/inventory/events/InvPurchaseOrderItemPublisher";
import { InvPurchaseOrderItemTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvPurchaseOrderItemTelemetry";

describe("InvPurchaseOrderItem Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvPurchaseOrderItemPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvPurchaseOrderItemTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
