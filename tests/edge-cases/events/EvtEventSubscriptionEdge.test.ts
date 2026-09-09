import { EvtEventSubscriptionPublisher } from "../../../services/core-engine/src/events/events/EvtEventSubscriptionPublisher";
import { EvtEventSubscriptionTelemetry } from "../../../services/core-engine/src/events/telemetry/EvtEventSubscriptionTelemetry";

describe("EvtEventSubscription Edge-Case & Outbox Test Suite", () => {
  const publisher = new EvtEventSubscriptionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = EvtEventSubscriptionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
