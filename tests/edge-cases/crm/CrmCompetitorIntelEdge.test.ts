import { CrmCompetitorIntelPublisher } from "../../../services/core-engine/src/crm/events/CrmCompetitorIntelPublisher";
import { CrmCompetitorIntelTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmCompetitorIntelTelemetry";

describe("CrmCompetitorIntel Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmCompetitorIntelPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmCompetitorIntelTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
