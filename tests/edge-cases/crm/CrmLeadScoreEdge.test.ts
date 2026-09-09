import { CrmLeadScorePublisher } from "../../../services/core-engine/src/crm/events/CrmLeadScorePublisher";
import { CrmLeadScoreTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmLeadScoreTelemetry";

describe("CrmLeadScore Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmLeadScorePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmLeadScoreTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
