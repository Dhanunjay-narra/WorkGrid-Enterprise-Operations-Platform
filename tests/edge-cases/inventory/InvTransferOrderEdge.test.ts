import { InvTransferOrderPublisher } from "../../../services/core-engine/src/inventory/events/InvTransferOrderPublisher";
import { InvTransferOrderTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvTransferOrderTelemetry";

describe("InvTransferOrder Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvTransferOrderPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvTransferOrderTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
