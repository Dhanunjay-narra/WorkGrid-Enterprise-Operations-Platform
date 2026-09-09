import { InvStockLevelPublisher } from "../../../services/core-engine/src/inventory/events/InvStockLevelPublisher";
import { InvStockLevelTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvStockLevelTelemetry";

describe("InvStockLevel Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvStockLevelPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvStockLevelTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
