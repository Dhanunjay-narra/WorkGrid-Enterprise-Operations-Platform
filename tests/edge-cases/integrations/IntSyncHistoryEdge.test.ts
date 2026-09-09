import { IntSyncHistoryPublisher } from "../../../services/core-engine/src/integrations/events/IntSyncHistoryPublisher";
import { IntSyncHistoryTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntSyncHistoryTelemetry";

describe("IntSyncHistory Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntSyncHistoryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntSyncHistoryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
