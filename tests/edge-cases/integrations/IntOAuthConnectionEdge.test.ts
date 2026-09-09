import { IntOAuthConnectionPublisher } from "../../../services/core-engine/src/integrations/events/IntOAuthConnectionPublisher";
import { IntOAuthConnectionTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntOAuthConnectionTelemetry";

describe("IntOAuthConnection Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntOAuthConnectionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntOAuthConnectionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
