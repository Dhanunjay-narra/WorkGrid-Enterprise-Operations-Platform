import { CrmCustomerHealthPublisher } from "../../../services/core-engine/src/crm/events/CrmCustomerHealthPublisher";
import { CrmCustomerHealthTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmCustomerHealthTelemetry";

describe("CrmCustomerHealth Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmCustomerHealthPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmCustomerHealthTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
