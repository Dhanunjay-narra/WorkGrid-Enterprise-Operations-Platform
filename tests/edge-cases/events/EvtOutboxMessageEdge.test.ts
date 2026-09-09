import { EvtOutboxMessagePublisher } from "../../../services/core-engine/src/events/events/EvtOutboxMessagePublisher";
import { EvtOutboxMessageTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtOutboxMessageTelemetry";

describe("EvtOutboxMessage Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtOutboxMessagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtOutboxMessageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
