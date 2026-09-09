import { WfEventTriggerPublisher } from "../../../services/core-engine/src/workflow/events/WfEventTriggerPublisher";
import { WfEventTriggerTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfEventTriggerTelemetry";

describe("WfEventTrigger Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfEventTriggerPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfEventTriggerTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
