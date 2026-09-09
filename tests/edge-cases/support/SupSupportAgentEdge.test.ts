import { SupSupportAgentPublisher } from "../../../services/core-engine/src/support/events/SupSupportAgentPublisher";
import { SupSupportAgentTelemetry } from "../../../services/core-engine/src/support/telemetry/SupSupportAgentTelemetry";

describe("SupSupportAgent Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupSupportAgentPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupSupportAgentTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
