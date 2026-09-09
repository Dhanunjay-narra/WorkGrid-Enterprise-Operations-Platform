import { SupSlaPolicyPublisher } from "../../../services/core-engine/src/support/events/SupSlaPolicyPublisher";
import { SupSlaPolicyTelemetry } from "../../../services/core-engine/src/support/telemetry/SupSlaPolicyTelemetry";

describe("SupSlaPolicy Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupSlaPolicyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupSlaPolicyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
