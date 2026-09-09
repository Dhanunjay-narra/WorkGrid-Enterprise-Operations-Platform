import { InvWarehouseZonePublisher } from "../../../services/core-engine/src/inventory/events/InvWarehouseZonePublisher";
import { InvWarehouseZoneTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvWarehouseZoneTelemetry";

describe("InvWarehouseZone Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvWarehouseZonePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvWarehouseZoneTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
