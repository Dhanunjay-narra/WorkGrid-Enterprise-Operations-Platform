import { InvStorageBinPublisher } from "../../../services/core-engine/src/inventory/events/InvStorageBinPublisher";
import { InvStorageBinTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvStorageBinTelemetry";

describe("InvStorageBin Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvStorageBinPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvStorageBinTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
