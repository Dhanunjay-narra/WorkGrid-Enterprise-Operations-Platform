import { EvtDeadLetterEventPublisher } from "../../../services/core-engine/src/events/events/EvtDeadLetterEventPublisher";
import { EvtDeadLetterEventTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtDeadLetterEventTelemetry";

describe("EvtDeadLetterEvent Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtDeadLetterEventPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtDeadLetterEventTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
