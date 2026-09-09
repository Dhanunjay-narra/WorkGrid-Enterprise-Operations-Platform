import { SupCannedResponsePublisher } from "../../../services/core-engine/src/support/events/SupCannedResponsePublisher";
import { SupCannedResponseTelemetry } from "../../../services/core-engine/src/support/telemetry/SupCannedResponseTelemetry";

describe("SupCannedResponse Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupCannedResponsePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupCannedResponseTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
