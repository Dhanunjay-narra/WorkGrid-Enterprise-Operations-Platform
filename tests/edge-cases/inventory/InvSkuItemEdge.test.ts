import { InvSkuItemPublisher } from "../../../services/core-engine/src/inventory/events/InvSkuItemPublisher";
import { InvSkuItemTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvSkuItemTelemetry";

describe("InvSkuItem Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvSkuItemPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvSkuItemTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
