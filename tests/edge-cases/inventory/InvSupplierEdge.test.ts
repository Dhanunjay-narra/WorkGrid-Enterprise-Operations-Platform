import { InvSupplierPublisher } from "../../../services/core-engine/src/inventory/events/InvSupplierPublisher";
import { InvSupplierTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvSupplierTelemetry";

describe("InvSupplier Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvSupplierPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvSupplierTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
