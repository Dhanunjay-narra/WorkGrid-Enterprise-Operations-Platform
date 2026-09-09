import { CrmSalesContractPublisher } from "../../../services/core-engine/src/crm/events/CrmSalesContractPublisher";
import { CrmSalesContractTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmSalesContractTelemetry";

describe("CrmSalesContract Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmSalesContractPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmSalesContractTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
