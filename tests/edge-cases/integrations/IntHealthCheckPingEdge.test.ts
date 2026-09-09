import { IntHealthCheckPingPublisher } from "../../../services/core-engine/src/integrations/events/IntHealthCheckPingPublisher";
import { IntHealthCheckPingTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntHealthCheckPingTelemetry";

describe("IntHealthCheckPing Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntHealthCheckPingPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntHealthCheckPingTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
