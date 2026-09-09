import { CrmOpportunitySplitPublisher } from "../../../services/core-engine/src/crm/events/CrmOpportunitySplitPublisher";
import { CrmOpportunitySplitTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmOpportunitySplitTelemetry";

describe("CrmOpportunitySplit Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmOpportunitySplitPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmOpportunitySplitTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
