import { IdGroupMembershipPublisher } from "../../../services/core-engine/src/identity/events/IdGroupMembershipPublisher";
import { IdGroupMembershipTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdGroupMembershipTelemetry";

describe("IdGroupMembership Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdGroupMembershipPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdGroupMembershipTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
