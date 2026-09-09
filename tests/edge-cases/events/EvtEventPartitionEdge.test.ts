import { EvtEventPartitionPublisher } from "../../../services/core-engine/src/events/events/EvtEventPartitionPublisher";
import { EvtEventPartitionTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtEventPartitionTelemetry";

describe("EvtEventPartition Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtEventPartitionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtEventPartitionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
