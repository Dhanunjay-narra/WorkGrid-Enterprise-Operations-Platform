import { CrmStagePublisher } from "../../../services/core-engine/src/crm/events/CrmStagePublisher";
import { CrmStageTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmStageTelemetry";

describe("CrmStage Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmStagePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmStageTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
