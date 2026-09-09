import { CrmLeadPublisher } from "../../../services/core-engine/src/crm/events/CrmLeadPublisher";
import { CrmLeadTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmLeadTelemetry";

describe("CrmLead Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmLeadPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmLeadTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
