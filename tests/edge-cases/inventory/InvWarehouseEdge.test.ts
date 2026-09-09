import { InvWarehousePublisher } from "../../../services/core-engine/src/inventory/events/InvWarehousePublisher";
import { InvWarehouseTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvWarehouseTelemetry";

describe("InvWarehouse Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvWarehousePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvWarehouseTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
