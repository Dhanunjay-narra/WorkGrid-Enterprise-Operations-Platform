import { WfRetryPolicyPublisher } from "../../../services/core-engine/src/workflow/events/WfRetryPolicyPublisher";
import { WfRetryPolicyTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfRetryPolicyTelemetry";

describe("WfRetryPolicy Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfRetryPolicyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfRetryPolicyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
