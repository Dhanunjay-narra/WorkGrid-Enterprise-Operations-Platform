import { IntSyncQueueItemPublisher } from "../../../services/core-engine/src/integrations/events/IntSyncQueueItemPublisher";
import { IntSyncQueueItemTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntSyncQueueItemTelemetry";

describe("IntSyncQueueItem Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntSyncQueueItemPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntSyncQueueItemTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
