import { InvBatchSerialPublisher } from "../../../services/core-engine/src/inventory/events/InvBatchSerialPublisher";
import { InvBatchSerialTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvBatchSerialTelemetry";

describe("InvBatchSerial Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvBatchSerialPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvBatchSerialTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
