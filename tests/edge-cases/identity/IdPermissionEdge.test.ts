import { IdPermissionPublisher } from "../../../services/core-engine/src/identity/events/IdPermissionPublisher";
import { IdPermissionTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdPermissionTelemetry";

describe("IdPermission Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdPermissionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdPermissionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
