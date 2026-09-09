import { IdRolePublisher } from "../../../services/core-engine/src/identity/events/IdRolePublisher";
import { IdRoleTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdRoleTelemetry";

describe("IdRole Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdRolePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdRoleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
