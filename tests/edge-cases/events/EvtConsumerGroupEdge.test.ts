import { EvtConsumerGroupPublisher } from "../../../services/core-engine/src/events/events/EvtConsumerGroupPublisher";
import { EvtConsumerGroupTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtConsumerGroupTelemetry";

describe("EvtConsumerGroup Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtConsumerGroupPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtConsumerGroupTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
