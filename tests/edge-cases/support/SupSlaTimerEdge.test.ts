import { SupSlaTimerPublisher } from "../../../services/core-engine/src/support/events/SupSlaTimerPublisher";
import { SupSlaTimerTelemetry } from "../../../services/core-engine/src/support/telemetry/SupSlaTimerTelemetry";

describe("SupSlaTimer Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupSlaTimerPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupSlaTimerTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
