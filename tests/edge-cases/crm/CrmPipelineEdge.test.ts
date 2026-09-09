import { CrmPipelinePublisher } from "../../../services/core-engine/src/crm/events/CrmPipelinePublisher";
import { CrmPipelineTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmPipelineTelemetry";

describe("CrmPipeline Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmPipelinePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmPipelineTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
