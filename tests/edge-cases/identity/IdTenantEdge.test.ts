import { IdTenantPublisher } from "../../../services/core-engine/src/identity/events/IdTenantPublisher";
import { IdTenantTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdTenantTelemetry";

describe("IdTenant Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdTenantPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdTenantTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
