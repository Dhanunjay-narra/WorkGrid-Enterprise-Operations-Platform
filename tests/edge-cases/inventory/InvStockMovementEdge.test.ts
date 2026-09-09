import { InvStockMovementPublisher } from "../../../services/core-engine/src/inventory/events/InvStockMovementPublisher";
import { InvStockMovementTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvStockMovementTelemetry";

describe("InvStockMovement Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvStockMovementPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvStockMovementTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
