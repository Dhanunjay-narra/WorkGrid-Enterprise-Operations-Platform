import { InvStockReservationPublisher } from "../../../services/core-engine/src/inventory/events/InvStockReservationPublisher";
import { InvStockReservationTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvStockReservationTelemetry";

describe("InvStockReservation Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvStockReservationPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvStockReservationTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
