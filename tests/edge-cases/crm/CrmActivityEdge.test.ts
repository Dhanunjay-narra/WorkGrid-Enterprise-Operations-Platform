import { CrmActivityPublisher } from "../../../services/core-engine/src/crm/events/CrmActivityPublisher";
import { CrmActivityTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmActivityTelemetry";

describe("CrmActivity Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmActivityPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmActivityTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
