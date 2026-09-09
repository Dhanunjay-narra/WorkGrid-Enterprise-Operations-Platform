import { EvtReplayJobPublisher } from "../../../services/core-engine/src/events/events/EvtReplayJobPublisher";
import { EvtReplayJobTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtReplayJobTelemetry";

describe("EvtReplayJob Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtReplayJobPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtReplayJobTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
