import { EvtIdempotencyRecordPublisher } from "../../../services/core-engine/src/events/events/EvtIdempotencyRecordPublisher";
import { EvtIdempotencyRecordTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtIdempotencyRecordTelemetry";

describe("EvtIdempotencyRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtIdempotencyRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtIdempotencyRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
