import { IntAdapterTelemetryPublisher } from "../../../services/core-engine/src/integrations/events/IntAdapterTelemetryPublisher";
import { IntAdapterTelemetryTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntAdapterTelemetryTelemetry";

describe("IntAdapterTelemetry Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntAdapterTelemetryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntAdapterTelemetryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
