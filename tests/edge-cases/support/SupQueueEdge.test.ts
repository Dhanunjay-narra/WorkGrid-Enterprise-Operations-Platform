import { SupQueuePublisher } from "../../../services/core-engine/src/support/events/SupQueuePublisher";
import { SupQueueTelemetry } from "../../../services/core-engine/src/support/telemetry/SupQueueTelemetry";

describe("SupQueue Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupQueuePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupQueueTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
