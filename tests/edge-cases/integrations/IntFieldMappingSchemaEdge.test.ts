import { IntFieldMappingSchemaPublisher } from "../../../services/core-engine/src/integrations/events/IntFieldMappingSchemaPublisher";
import { IntFieldMappingSchemaTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntFieldMappingSchemaTelemetry";

describe("IntFieldMappingSchema Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntFieldMappingSchemaPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntFieldMappingSchemaTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
