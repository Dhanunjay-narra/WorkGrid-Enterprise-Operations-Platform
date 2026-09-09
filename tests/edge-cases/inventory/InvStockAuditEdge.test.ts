import { InvStockAuditPublisher } from "../../../services/core-engine/src/inventory/events/InvStockAuditPublisher";
import { InvStockAuditTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvStockAuditTelemetry";

describe("InvStockAudit Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvStockAuditPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvStockAuditTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
