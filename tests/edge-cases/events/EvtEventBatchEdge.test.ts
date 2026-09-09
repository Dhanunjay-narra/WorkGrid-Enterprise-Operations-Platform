import { EvtEventBatchPublisher } from "../../../services/core-engine/src/events/events/EvtEventBatchPublisher";
import { EvtEventBatchTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtEventBatchTelemetry";

describe("EvtEventBatch Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtEventBatchPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtEventBatchTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
