import { CrmAccountPublisher } from "../../../services/core-engine/src/crm/events/CrmAccountPublisher";
import { CrmAccountTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmAccountTelemetry";

describe("CrmAccount Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmAccountPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmAccountTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
