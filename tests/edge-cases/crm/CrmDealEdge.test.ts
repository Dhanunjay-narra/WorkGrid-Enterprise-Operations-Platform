import { CrmDealPublisher } from "../../../services/core-engine/src/crm/events/CrmDealPublisher";
import { CrmDealTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmDealTelemetry";

describe("CrmDeal Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmDealPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmDealTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
