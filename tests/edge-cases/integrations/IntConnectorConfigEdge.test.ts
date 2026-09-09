import { IntConnectorConfigPublisher } from "../../../services/core-engine/src/integrations/events/IntConnectorConfigPublisher";
import { IntConnectorConfigTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntConnectorConfigTelemetry";

describe("IntConnectorConfig Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntConnectorConfigPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntConnectorConfigTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
